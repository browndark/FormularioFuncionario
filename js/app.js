// Importa SDKs Firebase (modo módulo)
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

// === Configuração do seu projeto Firebase ===
const firebaseConfig = {
  apiKey: "AIzaSyCxLtIROIZtsYEiOxuFY88eNAR64iEnN5w",
  authDomain: "funcionario-fd1cd.firebaseapp.com",
  projectId: "funcionario-fd1cd",
  storageBucket: "funcionario-fd1cd.firebasestorage.app",
  messagingSenderId: "560843562153",
  appId: "1:560843562153:web:d4fd518924b44812dd1db8",
  measurementId: "G-MT6FLY5MJ5"
};

// Inicializa o Firebase e o Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// === Seletores do DOM ===
const form = document.getElementById("form-funcionario");
const tbody = document.getElementById("tbody-funcionarios");
const btnLimpar = document.getElementById("btn-limpar");
const inputNome = document.getElementById("nome");
const inputIdade = document.getElementById("idade");
const inputCargo = document.getElementById("cargo");
const inputSalario = document.getElementById("salario");

// === Renderização da Tabela ===
async function carregarFuncionarios() {
  tbody.innerHTML = "";
  const snapshot = await getDocs(collection(db, "funcionarios"));
  snapshot.forEach((docSnap) => {
    const f = docSnap.data();
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${f.nome}</td>
      <td>${f.idade}</td>
      <td>${f.cargo}</td>
      <td>R$ ${Number(f.salario).toFixed(2)}</td>
      <td>
        <button class="warn" onclick="editarFuncionario('${docSnap.id}', '${f.nome}', ${f.idade}, '${f.cargo}', ${f.salario})">Editar</button>
        <button class="danger" onclick="excluirFuncionario('${docSnap.id}')">Excluir</button>
      </td>`;
    tbody.appendChild(tr);
  });
}

// === Adicionar ou Atualizar ===
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const nome = inputNome.value.trim();
  const idade = Number(inputIdade.value);
  const cargo = inputCargo.value.trim();
  const salario = Number(inputSalario.value);

  if (!nome || !cargo || !idade || !salario) {
    alert("Preencha todos os campos!");
    return;
  }

  await addDoc(collection(db, "funcionarios"), { nome, idade, cargo, salario });
  form.reset();
  carregarFuncionarios();
  alert("Funcionário cadastrado com sucesso!");
});

// === Editar ===
window.editarFuncionario = (id, nome, idade, cargo, salario) => {
  inputNome.value = nome;
  inputIdade.value = idade;
  inputCargo.value = cargo;
  inputSalario.value = salario;

  form.onsubmit = async (e) => {
    e.preventDefault();
    await updateDoc(doc(db, "funcionarios", id), {
      nome: inputNome.value,
      idade: Number(inputIdade.value),
      cargo: inputCargo.value,
      salario: Number(inputSalario.value),
    });
    form.reset();
    form.onsubmit = null;
    form.addEventListener("submit", salvar);
    carregarFuncionarios();
    alert("Funcionário atualizado!");
  };
};

// === Excluir ===
window.excluirFuncionario = async (id) => {
  if (confirm("Deseja excluir este funcionário?")) {
    await deleteDoc(doc(db, "funcionarios", id));
    carregarFuncionarios();
  }
};

// === Limpar ===
btnLimpar.onclick = () => form.reset();

// === Inicialização ===
carregarFuncionarios();

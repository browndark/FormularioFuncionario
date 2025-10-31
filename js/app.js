// ===== SISTEMA DE CADASTRO DE FUNCIONÁRIOS COM LOCALSTORAGE =====
// Sistema completo de CRUD (Create, Read, Update, Delete) usando localStorage

// === Seletores do DOM ===
const form = document.getElementById("form-funcionario");
const tbody = document.getElementById("tbody-funcionarios");
const btnLimpar = document.getElementById("btn-limpar");
const inputNome = document.getElementById("nome");
const inputIdade = document.getElementById("idade");
const inputCargo = document.getElementById("cargo");
const inputSalario = document.getElementById("salario");

// === Variável global para controle de edição ===
let funcionarioEditandoId = null;

// === Funções para localStorage ===
function salvarNoLocalStorage(funcionarios) {
  localStorage.setItem('funcionarios', JSON.stringify(funcionarios));
}

function carregarDoLocalStorage() {
  const dados = localStorage.getItem('funcionarios');
  return dados ? JSON.parse(dados) : [];
}

function gerarId() {
  return Date.now().toString() + Math.random().toString(36).substr(2, 9);
}

// === Renderização da Tabela ===
function carregarFuncionarios() {
  tbody.innerHTML = "";
  const funcionarios = carregarDoLocalStorage();
  
  funcionarios.forEach(funcionario => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${funcionario.nome}</td>
      <td>${funcionario.idade}</td>
      <td>${funcionario.cargo}</td>
      <td>R$ ${Number(funcionario.salario).toFixed(2)}</td>
      <td>
        <button class="warn" onclick="editarFuncionario('${funcionario.id}')">Editar</button>
        <button class="danger" onclick="excluirFuncionario('${funcionario.id}')">Excluir</button>
      </td>`;
    tbody.appendChild(tr);
  });
}

// === Adicionar ou Atualizar Funcionário ===
form.addEventListener("submit", (e) => {
  e.preventDefault();
  
  const nome = inputNome.value.trim();
  const idade = Number(inputIdade.value);
  const cargo = inputCargo.value.trim();
  const salario = Number(inputSalario.value);

  if (!nome || !cargo || !idade || !salario) {
    alert("Preencha todos os campos!");
    return;
  }

  const funcionarios = carregarDoLocalStorage();

  if (funcionarioEditandoId) {
    // Modo edição
    const index = funcionarios.findIndex(f => f.id === funcionarioEditandoId);
    if (index !== -1) {
      funcionarios[index] = {
        id: funcionarioEditandoId,
        nome, idade, cargo, salario
      };
      salvarNoLocalStorage(funcionarios);
      alert("Funcionário atualizado com sucesso!");
      
      // Resetar modo edição
      funcionarioEditandoId = null;
      const btnSubmit = form.querySelector('button[type="submit"]');
      btnSubmit.textContent = "Cadastrar Funcionário";
    }
  } else {
    // Modo criação
    const novoFuncionario = {
      id: gerarId(),
      nome, idade, cargo, salario
    };
    funcionarios.push(novoFuncionario);
    salvarNoLocalStorage(funcionarios);
    alert("Funcionário cadastrado com sucesso!");
  }

  form.reset();
  carregarFuncionarios();
});

// === Editar Funcionário ===
window.editarFuncionario = (id) => {
  const funcionarios = carregarDoLocalStorage();
  const funcionario = funcionarios.find(f => f.id === id);
  
  if (funcionario) {
    inputNome.value = funcionario.nome;
    inputIdade.value = funcionario.idade;
    inputCargo.value = funcionario.cargo;
    inputSalario.value = funcionario.salario;
    
    funcionarioEditandoId = id;
    
    // Alterar texto do botão para indicar modo edição
    const btnSubmit = form.querySelector('button[type="submit"]');
    btnSubmit.textContent = "Atualizar Funcionário";
  }
};

// === Excluir Funcionário ===
window.excluirFuncionario = (id) => {
  if (confirm("Deseja excluir este funcionário?")) {
    const funcionarios = carregarDoLocalStorage();
    const funcionariosFiltrados = funcionarios.filter(f => f.id !== id);
    
    salvarNoLocalStorage(funcionariosFiltrados);
    carregarFuncionarios();
    alert("Funcionário excluído com sucesso!");
  }
};

// === Limpar Formulário ===
btnLimpar.onclick = () => {
  form.reset();
  funcionarioEditandoId = null;
  
  // Restaurar texto original do botão
  const btnSubmit = form.querySelector('button[type="submit"]');
  btnSubmit.textContent = "Cadastrar Funcionário";
};

// === Inicialização do Sistema ===
document.addEventListener('DOMContentLoaded', () => {
  carregarFuncionarios();
  console.log('Sistema inicializado com localStorage');
  console.log('Funcionários carregados:', carregarDoLocalStorage().length);
});

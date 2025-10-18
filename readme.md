# Sistema de Gestão de Funcionários (HTML/CSS/JS + Docker)

App front-end puro (sem backend), com **cadastro, listagem, edição, exclusão** e **relatórios** usando `map`, `filter` e `reduce`. Dados persistem em `localStorage`.

## Requisitos do estudo de caso
- Formulário com Nome, Idade, Cargo, Salário.
- Classe `Funcionario` com atributos, getters/setters e `toString()`.
- Cadastrar, listar em `<table>`, editar e excluir com eventos **onclick**.
- Uso de **funções anônimas** e **arrow functions**.
- Relatórios:
  - Salário > 5000;
  - Média salarial;
  - Cargos únicos (sem repetição);
  - Nomes em MAIÚSCULO.
- Versionar no GitHub.

```bash
# na raiz do projeto (onde está o Dockerfile)
docker build -t funcionarios-app .
docker run --rm -p 8080:80 funcionarios-app

python -m http.server 8080
Acesse: http://localhost:8080

Link do banco de dados do firebase: https://console.firebase.google.com/u/0/project/funcionario-fd1cd/firestore/databases/-default-/data/~2Ffuncionarios~2FdRMZ9Cs1NxcFjJgmB3g3
< https://console.firebase.google.com/u/0/>
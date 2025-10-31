# Sistema de Gestão de Funcionários (HTML/CSS/JS + localStorage)

App front-end puro (sem backend), com **cadastro, listagem, edição, exclusão** e **relatórios** usando `map`, `filter` e `reduce`. Dados persistem em **localStorage** do navegador.

## 🔄 Mudança de Persistência de Dados

**ATUALIZAÇÃO:** O sistema foi migrado do Firebase para localStorage do navegador para uma solução mais simples e independente.

### Por que localStorage?
- ✅ **Sem dependências externas**: Não precisa de configuração do Firebase
- ✅ **Funcionamento offline**: Dados salvos localmente no navegador
- ✅ **Simplicidade**: Menor complexidade de código
- ✅ **Privacidade**: Dados ficam apenas no navegador do usuário
- ✅ **Performance**: Acesso instantâneo aos dados

### Limitações do localStorage:
- ⚠️ **Dados por navegador**: Dados não são compartilhados entre dispositivos
- ⚠️ **Limpeza do cache**: Dados podem ser perdidos se limpar dados do navegador
- ⚠️ **Limite de armazenamento**: Cerca de 5-10MB por domínio

## 🏗️ Funcionalidades Implementadas

### Classe Funcionario
- Atributos: `id`, `nome`, `idade`, `cargo`, `salario`
- **Getters/Setters**: Métodos para acessar e modificar propriedades
- **toString()**: Representação em string do objeto

### CRUD Completo
- ✅ **Create**: Cadastrar novos funcionários
- ✅ **Read**: Listar funcionários em tabela
- ✅ **Update**: Editar dados existentes
- ✅ **Delete**: Excluir funcionários

### Relatórios com Funções de Array
- 🔍 **Filtros**: Funcionários com salário > R$ 5.000 (`filter`)
- 📊 **Média salarial**: Cálculo usando `reduce`
- 🏷️ **Cargos únicos**: Lista sem repetições (`map` + `Set`)
- 🔤 **Nomes em MAIÚSCULO**: Transformação com `map`

### Recursos Extras
- 🔍 **Busca em tempo real**: Filtra por nome ou cargo
- 💾 **Persistência automática**: Dados salvos automaticamente no localStorage
- 🎯 **Eventos onclick**: Botões de editar/excluir
- ➡️ **Arrow functions**: Sintaxe moderna do JavaScript

## 🚀 Como Executar

### Método 1: Servidor local simples
```bash
# Python 3
python -m http.server 8080

# Node.js (se tiver http-server instalado)
npx http-server -p 8080
```

### Método 2: Abrir diretamente
Abra o arquivo `index.html` diretamente no navegador.

Acesse: http://localhost:8080

## 📋 Requisitos Atendidos

- ✅ Formulário com Nome, Idade, Cargo, Salário
- ✅ Classe `Funcionario` com getters/setters e `toString()`
- ✅ Cadastrar, listar, editar e excluir
- ✅ Eventos **onclick** nos botões
- ✅ **Funções anônimas** e **arrow functions**
- ✅ Relatórios com `map`, `filter` e `reduce`
- ✅ Versionamento no GitHub

## 🔄 Histórico de Mudanças

### v2.1 - Aprimoramentos Visuais
- **Atualizado**: Subtítulo personalizado com dados do aluno e professor
- **Melhorado**: Design moderno com gradientes e animações suaves
- **Adicionado**: Feedback visual ao salvar funcionários
- **Adicionado**: Contador dinâmico de funcionários no rodapé

### v2.0 - Migração para localStorage
- **Removido**: Dependências do Firebase
- **Adicionado**: Persistência com localStorage
- **Melhorado**: Classe Funcionario completa com getters/setters
- **Adicionado**: Funções de relatório usando map/filter/reduce

---

**Desenvolvido por Bruno Custódio de Castro para o Professor Daniel**
**Feito com ❤️ usando HTML, CSS, JavaScript e localStorage**

python -m http.server 8080
Acesse: http://localhost:8080

Link do banco de dados do firebase: https://console.firebase.google.com/u/0/project/funcionario-fd1cd/firestore/databases/-default-/data/~2Ffuncionarios~2FdRMZ9Cs1NxcFjJgmB3g3
< https://console.firebase.google.com/u/0/>
=======
O projeto está ligado no banco de dados do Firebase:
https://console.firebase.google.com/u/0/
onde será anexado o cadastro do funcionario
>>>>>>> 8407263c39863ec6bca0e7b2cb28e4c3768e1535

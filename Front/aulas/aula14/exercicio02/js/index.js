const nome1 = document.querySelector("#nome1");
const idade1 = document.querySelector("#idade1");
const cpf1 = document.querySelector("#cpf1");
const telefone1 = document.querySelector("#telefone1");

const nome2 = document.querySelector("#nome2");
const idade2 = document.querySelector("#idade2");
const cpf2 = document.querySelector("#cpf2");
const telefone2 = document.querySelector("#telefone2");

fetch("./json/index.json")
  .then((response) => response.json())
  .then((pessoas) => {
    nome1.innerHTML = pessoas.pessoa1.nome;
    idade1.innerHTML = pessoas.pessoa1.idade;
    cpf1.innerHTML = pessoas.pessoa1.cpf;
    telefone1.innerHTML = pessoas.pessoa1.telefone;
    nome2.innerHTML = pessoas.pessoa2.nome;
    idade2.innerHTML = pessoas.pessoa2.idade;
    cpf2.innerHTML = pessoas.pessoa2.cpf;
    telefone2.innerHTML = pessoas.pessoa2.telefone;
  });

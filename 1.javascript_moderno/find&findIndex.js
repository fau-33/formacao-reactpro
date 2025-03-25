// Find - Encontra o primeiro elemento que atende a uma condição
const pessoas = [
  {
    nome: "João",
    idade: 25,
  },
  {
    nome: "Maria",
    idade: 30,
  },
  {
    nome: "Pedro",
    idade: 35,
  },
];

const joao = pessoas.find((pessoa) => {
  return pessoa.nome === "João";
});

// FindIndex - Encontra o índice do primeiro elemento que atende a uma condição

const joaoIndex = pessoas.findIndex((pessoa) => {
  return pessoa.nome === "João";
});

console.log(joao);
console.log(joaoIndex);

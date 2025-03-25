// Filter é um método que filtra os elementos de um array com base em uma condição
const numeros = [10, 1, 2, 50, 15, 20, 30, 40, 50];

const numerosFiltrados = numeros.filter((numero) => {
  return numero > 10;
});

console.log(numerosFiltrados);

const usuarios = [
  { nome: "Diego", idade: 23 },
  { nome: "Gabriel", idade: 15 },
  { nome: "Cassio", idade: 20 },
  { nome: "Higor", idade: 23 },
];

const usuariosMaioresDeIdade = usuarios.filter((usuario) => {
  return usuario.idade > 18;
});

console.log(usuariosMaioresDeIdade);

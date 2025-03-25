//1.Utilizando o map, crie uma lista que contenha todos os valores da lista de "números" multiplicados por 2, logue-a no console
const numeros = [10, 20, 30, 40, 50];

const numerosDobrados = numeros.map((numero) => {
  return numero * 2;
});

console.log(numerosDobrados);

//2. Utilizando o map, crie uma lista que contenha todos os valores da lista de "usuarios" que contenha a "idade" multiplicada por 2, logue-a no console

const usuarios = [
  { nome: "Diego", idade: 23 },
  { nome: "Gabriel", idade: 15 },
  { nome: "Cassio", idade: 20 },
  { nome: "Higor", idade: 23 },
];

const usuariosDobrados = usuarios.map((usuario) => {
  return {
    ...usuario,
    idade: usuario.idade * 2,
  };
});

console.log(usuariosDobrados);

// 3.Crie uma lista de strings baseando-se na lista de "pessoas", que diga se a pessoa pode ir ou não para o matrix.Para ir tem que ser maior que 18

const pessoas = [
  { nome: "Diego", idade: 23 },
  { nome: "Gabriel", idade: 15 },
  { nome: "Cassio", idade: 20 },
  { nome: "Higor", idade: 23 },
];

const pessoasQuePodemIrParaOMatrix = pessoas.map((pessoa) => {
  return pessoa.idade > 18
    ? "Pode ir para o matrix"
    : "Não pode ir para o matrix";
});

console.log(pessoasQuePodemIrParaOMatrix);

//

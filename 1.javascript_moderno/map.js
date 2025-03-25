// Map => Retorna um array com o mesmo tamanho do array de origem

const numeros = [1, 2, 3, 4, 5];

const numerosDobrados = numeros.map((numero, index) => {
  console.log(`index: ${index}  , numero: ${numero}`);
  return numero * 2;
});

//console.log(numerosDobrados);

//Map com array de objetos
const usuarios = [
  { nome: "Diego", idade: 23, empresa: "Rocketseat" },
  { nome: "Gabriel", idade: 15, empresa: "Fullsack-club" },
  { nome: "Cassio", idade: 20, empresa: "Globo" },
  { nome: "Higor", idade: 23, empresa: "Cod3r" },
];

const multiplicaIdade = usuarios.map((usuario) => {
  return {
    ...usuario,
    idade: usuario.idade * 2,
  };
});
console.log(multiplicaIdade);

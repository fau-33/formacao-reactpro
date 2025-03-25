// Some - Verifica se pelo menos um elemento do array atende a uma condição

const numeros = [2, 2, 3, 4, 11];

const numerosMaioresQue10 = numeros.some((numero) => {
  return numero > 10;
});

console.log(numerosMaioresQue10);

// Every - Verifica se todos os elementos do array atendem a uma condição

const numerosMaioresQue1 = numeros.every((numero) => {
  return numero > 1;
});

console.log(numerosMaioresQue1);

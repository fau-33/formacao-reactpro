// 1. Assinale uma variável pra cada valor na lista "numeros" utilizando Destructuring, e logue-as no console.

const numeros = [1, 2, 3, 4, 5];

const [num1, num2, num3, num4, num5] = numeros;

//console.log(num1, num2, num3, num4, num5);

// 2. Inverta os valores das variáveis "a" e "b". Transforme o valor da variável "a" no valor da variável "b" e vice-versa, e logue-as no console.

let a = 5;
let b = 10;

[a, b] = [b, a];

//console.log(a, b);

// 3. Crie uma nova lista baseando-se na "melhoresSeriesDoMundo" adicionando dois novos valores a ela utilizando o Spread Operator, e logue-a no console.

const melhoresSeriesDoMundo = ["GOT", "Breaking Bad", "Vikings"];

const melhoresSeriesDoMundo2 = [
  ...melhoresSeriesDoMundo,
  "Stranger Things",
  "Game of Thrones",
];

//console.log(melhoresSeriesDoMundo2);

// 4. Assinale os dois primeiros valores da lista "sobremesas" a duas variáveis, e distribua o restante em apenas uma, utilizando o Spread Operator, e logue-as no console.

const sobremesas = [
  "Sorvete",
  "Petit Gateau",
  "Açai",
  "Pudim",
  "Mousse de Maracujá",
];

const [sobremesa1, sobremesa2, ...sobremesasRestantes] = sobremesas;

console.log(sobremesa1, sobremesa2, sobremesasRestantes);

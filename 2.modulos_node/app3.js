const { firstName, lastName, sum } = require("./utils");
const messages = require("./messages");

console.log(firstName, lastName);
console.log(sum(1, 2));

//Desafio: Crie um arquivo chamado "messages.js"
//2 - Crie uma função chamada "getMessage" que retorna "Suas mensagens..."
//3 - Exporte a função "getMessage"
//4 - Do "app.js" importe a função "getMessage" e chame-a imprimindo o retorno no console

const message = messages.getMessage();
console.log(message);

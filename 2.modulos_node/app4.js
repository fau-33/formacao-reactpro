const validator = require("validator");

const email = "teste@teste.com";
const isEmailValid = validator.isEmail(email);

console.log(isEmailValid);

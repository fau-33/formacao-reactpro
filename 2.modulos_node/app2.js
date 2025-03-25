const fs = require("fs");

fs.writeFileSync(
  "mensagem.txt",
  "Essa é uma segunda mensagem para o modulo fs!\n"
);

// Anexe uma mensagem no arquivo mensagem.txt
//
//1- Use o metodo "appendFileSync" para anexar uma mensagem
//2- Execute o script
//3- Verifique o conteudo do arquivo mensagem.txt

fs.appendFileSync(
  "mensagem.txt",
  "Essa é uma terceira mensagem para o modulo fs!\n"
);

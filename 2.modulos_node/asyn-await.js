const iniciarBancoDeDados = (senha) => {
  return new Promise((resolve, reject) => {
    console.log(`Iniciando o banco de dados... (senha inserida: ${senha}) `);
    if (senha === "12345") {
      resolve("Banco de dados iniciado com sucesso!");
    } else {
      reject("Senha incorreta!");
    }
  });
};

const preparandoBancoDeDados = () => {
  return new Promise((resolve, reject) => {
    console.log("Preparando o banco de dados...");
    resolve("Banco de dados preparado com sucesso!");
  });
};

// iniciarBancoDeDados("123456")
//   .then((value) => {
//     console.log(value);
//     return preparandoBancoDeDados();
//   })
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const iniciarPrepararBancoDeDados = async () => {
  try {
    const iniciar = await iniciarBancoDeDados("12345");
    console.log(iniciar);
    const preparar = await preparandoBancoDeDados();
    console.log(preparar);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Fim da execução");
  }
};

iniciarPrepararBancoDeDados();

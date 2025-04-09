// 1 - Converta a execução da Promise para async/await

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello World");
    }, 2000);
  });
};

// helloWorld().then((value) => {
//   console.log(value);
// });

const doHelloWorld = async () => {
  const hello = await helloWorld();
  console.log(hello);
};

doHelloWorld();

// 2 - Converta a execução da Promise para async/await
const sayMyName = async (name) => {
  return new Promise((resolve, reject) => {
    if (name === "Flávio") {
      resolve(`Meu nome é ${name}`);
    } else {
      reject("Não posso falar esse nome");
    }
  });
};

// sayMyName("Flávio")
//   .then((value) => {
//     console.log(value);
//   })
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   }).finally(() => {
//     console.log("Fim da execução");s
//   });

const doSayMyName = async (name) => {
  try {
    const myName = await sayMyName(name);
    console.log(myName);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Tenha um ótimo dia!");
  }
};

doSayMyName("Flávio");

// 3 - Converta a execução da Promise para async/await

const login = async (senha) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (senha === "12345") {
        resolve("Logado com sucesso!");
      } else {
        reject("Senha incorreta!");
      }
    }, 2000);
  });
};

// login("12345")
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("Volte sempre!");
//   });

const doLogin = async (senha) => {
  try {
    const log = await login(senha);
    console.log(log);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Volte sempre!");
  }
};

doLogin("12345");

// const usuario = {
//   name: "Jane Doe",
//   login() {
//     console.log(`O ${this.name} está logado`);
//   },
//   logout() {
//     console.log(`O ${this.name} está deslogado`);
//   },
// };

class Usuario {
  constructor(name) {
    this.name = name;
  }

  static sayHello() {
    console.log("Olá mundo!");
  }

  login() {
    console.log(`O ${this.name} está logado`);
  }

  logout() {
    console.log(`O ${this.name} está deslogado`);
  }
}

Usuario.sayHello();

// const usuario = new Usuario("Jane Doe");
// const usuario2 = new Usuario("John Doe");

// console.log(usuario);
// console.log(usuario2);

// usuario.login();
// usuario2.login();

class Animal {
  constructor(name) {
    this.name = name;
  }
  falar() {
    console.log(`O ${this.name} fez algum barulho`);
  }
}

class Cachorro extends Animal {
  constructor(name) {
    super(name);
  }
  falar() {
    console.log(`O ${this.name} latiu`);
  }

  latir() {
    console.log(`O ${this.name} latiu novamente`);
  }
}

class Gato extends Animal {
  constructor(name) {
    super(name);
  }
  falar() {
    console.log(`O ${this.name} miou`);
  }
}

const cachorro = new Cachorro("Rex");

cachorro.falar();

const gato = new Gato("Garfield");

gato.falar();
// const cachorro = new Cachorro("Simba");

// cachorro.latir();

// const animal = new Animal("Simba");

// animal.falar();

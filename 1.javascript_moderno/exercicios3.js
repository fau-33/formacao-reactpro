// 1. Crie uma classe chamada "Guerreiro" que receba em seu construtor um "nome" e "idade" e que tenha o método "lutar"que logue uma mensagem dizendo "O guerreiro " + o nome " + da idade " + a idade " está lutando!".

class Guerreiro {
  constructor(name, idade) {
    this.name = name;
    this.idade = idade;
  }
  lutar() {
    console.log(
      `O guerreiro ${this.name} da idade ${this.idade} está lutando!`
    );
  }
}

const guerreiro1 = new Guerreiro("Rollo", 34);
guerreiro1.lutar();

class Viking extends Guerreiro {
  constructor(name, idade) {
    super(name, idade);
  }
  lutar() {
    console.log(
      `O viking ${this.name} da idade ${this.idade} está lutando em nome de Odin!`
    );
  }

  lutarComMartelo() {
    console.log(
      `O viking ${this.name} da idade ${this.idade} está lutando com seu machado em nome de Thor!`
    );
  }
}

const viking1 = new Viking("Ragnar", 40);
viking1.lutar();
viking1.lutarComMartelo();

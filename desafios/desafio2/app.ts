/* DESAFIO DE CÓDIGO TYPESCRIPT 2 */
enum Profissao {
  padeiro = 1,
  atriz,
}

interface Pessoa {
  nome: string;
  idade: number;
  profissao: Profissao;
}

const pessoa1: Pessoa = {
  nome: 'Maria',
  idade: 29,
  profissao: Profissao.atriz,
};

const pessoa2: Pessoa = {
  nome: 'Roberto',
  idade: 19,
  profissao: Profissao.padeiro,
};

const pessoa3: Pessoa = {
  nome: 'Laura',
  idade: 32,
  profissao: Profissao.atriz,
};

const pessoa4: Pessoa = {
  nome: 'Carlos',
  idade: 19,
  profissao: Profissao.padeiro,
};

console.log(pessoa1);
console.log(pessoa2);
console.log(pessoa3);
console.log(pessoa4);

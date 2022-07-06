enum Departmento {
  administrativo = 1,
  Financeiro = 2,
  Marketing = 3,
}

type Colaborador = {
  nome: string;
  codigo: number;
  departamento: Departmento;
};

const colaborador1: Colaborador = {
  nome: 'João',
  codigo: 10,
  departamento: Departmento.administrativo,
};

const colaborador2: Colaborador = {
  nome: 'Paula',
  codigo: 4,
  departamento: Departmento.Marketing,
};

const colaborador3: Colaborador = {
  nome: 'Lucas',
  codigo: 2,
  departamento: Departmento.Financeiro,
};

const colaborador4: Colaborador = {
  nome: 'Jordana',
  codigo: 1,
  departamento: Departmento.administrativo,
};

console.log(colaborador1);
console.log(colaborador2);
console.log(colaborador3);
console.log(colaborador4);

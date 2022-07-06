// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?

const botaoAtualizar = document.getElementById(
  'atualizar-saldo',
) as HTMLButtonElement;
const botaoLimpar = document.getElementById(
  'limpar-saldo',
) as HTMLButtonElement;
const soma = document.getElementById('soma') as HTMLInputElement;
const campoSaldo = document.getElementById('campo-saldo') as HTMLElement;

let total = 0;

limparSaldo();

function somarAoSaldo(soma: number) {
  total += soma;
  campoSaldo.innerHTML += total.toString();
  campoSaldo.innerHTML = total.toString();
  limparSoma();
}

function limparSoma() {
  soma.value = '';
}

function limparSaldo() {
  total = 0;
  campoSaldo.innerHTML = total.toString();
}

botaoAtualizar.addEventListener('click', function () {
  somarAoSaldo(Number(soma.value));
});

botaoLimpar.addEventListener('click', function () {
  limparSaldo();
});

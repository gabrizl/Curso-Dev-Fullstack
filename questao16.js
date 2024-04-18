// Variáveis
let contador = 0;
let numeroAtual = 101;
let numeroPrimo;

//pegar apenas os 50 primeiros numeros
while (contador < 50) {
  let Primo = true;
  let divisor = 2;

  //verificar se é numero primo verificando se existe alguma divisão que não tenha resto
  while (divisor < numeroAtual) {
    if (numeroAtual % divisor === 0) {
      Primo = false;
      break;
    }
    divisor++;
  }
  if (Primo) {
    console.log(numeroAtual);
    contador++;
  }
  numeroAtual++;
}

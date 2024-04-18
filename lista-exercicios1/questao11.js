//Escreva um algoritmo para ler uma quantidade indeterminada de valores inteiros. Para
//cada valor fornecido escrever uma mensagem que indica se cada valor fornecido é PAR
//ou ÍMPAR. O algoritmo será encerrado imediatamente após a leitura de um valor NULO ou
//NEGATIVO.

const prompt = require("prompt-sync")();

let num = 1;

while (num >= 0) {
  num = parseInt(prompt("digite um numero: "));
  if (num % 2 == 0) {
    console.log("PAR");
  } else {
    console.log("ÍMPAR");
  }
}

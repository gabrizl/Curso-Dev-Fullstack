// Fazer um algoritmos para receber um número decimal e o peso de cada número até
// que o usuário digite o número 0. Fazer a média ponderada desses números e pesos
// respectivos.

const prompt = require("prompt-sync")();

let num;
let peso;
let somaNumero = 0.0;
let somaPesos = 0.0;

while (num !== 0) {
  num = parseFloat(prompt("Digite um número decimal (ou 0 para terminar):"));

  if (!isNaN(num) && num !== 0) {
    peso = parseFloat(prompt("Digite o peso:"));
    somaPesos += peso;
    somaNumero += (num * peso);
  }
}

console.log("media: ", soma / somaPesos);

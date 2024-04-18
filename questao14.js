//  Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.

const prompt = require("prompt-sync")();

let num;
let cont = 0;
let soma = 0.0;

while (num !== 0) {
  num = parseFloat(prompt("Digite um número decimal (ou 0 para terminar):"));

  if (!isNaN(num) && num !== 0) {
    cont++;
    soma += num;
  }
}

console.log("media: ", soma / cont);

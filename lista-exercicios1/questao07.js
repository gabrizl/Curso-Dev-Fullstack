//As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
//forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
//compradas, calcule e escreva o valor total da compra.

const prompt = require("prompt-sync")();

let numMaca = parseInt(prompt("Digite o numero de maçãs que deseja:"));
let preco = 0.0;

if (numMaca >= 12) {
  preco = numMaca * 0.25;
  console.log("Preço total: R$", preco);
} else if (0 < numMaca < 12) {
  preco = numMaca * 0.3;
  console.log("Preço total: R$", preco);
}

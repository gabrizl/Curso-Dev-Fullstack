//Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
//e escreve-los em ordem crescente.
const prompt = require("prompt-sync")();

let num1 = parseInt(prompt("digite o primeiro numero:"));
let num2 = parseInt(prompt("digite o segundo numero:"));

if (num1 > num2) {
  console.log(num1, " ", num2);
} else {
  console.log(num2, " ", num1);
}

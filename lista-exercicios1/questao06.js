// Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
// Isósceles, escaleno ou eqüilátero.
// Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
// Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
// Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
// Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

const prompt = require("prompt-sync")();

let ladoA = parseInt(prompt("digite o valor do lado A:"));
let ladoB = parseInt(prompt("digite o valor do lado B:"));
let ladoC = parseInt(prompt("digite o valor do lado C:"));

//verificar se o triangulo pode ser formado

if (ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoB + ladoA) {
  console.log("O triângulo pode ser criado!");

  if (ladoA == ladoB && ladoB == ladoC) {
    console.log("Triângulo Equilátero");
  } else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC) {
    console.log("Triângulo isóceles");
  } else {
    console.log("Triangulo Escaleno");
  }
} else {
  console.log("O triângulo não pode ser criado!");
}

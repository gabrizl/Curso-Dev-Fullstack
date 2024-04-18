// Escreva um algoritmo para ler as notas das duas avaliações de um aluno no semestre,
// calcular e escrever a média semestral e a seguinte mensagem: ‘PARABÉNS! Você foi
// aprovado’, somente se o aluno foi aprovado (considere 6.0 a nota mínima para
// aprovação).

const prompt = require("prompt-sync")();

let nota1 = parseFloat(prompt("digite a primeira nota:"));
let nota2 = parseFloat(prompt("digite a segunda nota:"));

let media = (nota1 + nota2) / 2;

if (0 <= nota1 <= 10 && 0 <= nota2 <= 10) {
  if (media >= 6) {
    console.log("PARABENS! voce foi aprovado\nmedia:", media);
  }
} else {
  console.log("nota invalida");
}

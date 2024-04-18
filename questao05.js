// Acrescente ao exercício acima a mensagem ‘Você foi REPROVADO! Estude mais’ caso a
// média calculada seja menor que 6,0

const prompt = require("prompt-sync")();

let nota1 = parseFloat(prompt("digite a primeira nota:"));
let nota2 = parseFloat(prompt("digite a segunda nota:"));

let media = (nota1 + nota2) / 2;

if (0 <= nota1 <= 10 && 0 <= nota2 <= 10) {
  if (media >= 6) {
    console.log("PARABENS! voce foi aprovado\nmedia:", media);
  } else {
    console.log("Você foi REPROVADO! Estude mais");
  }
} else {
  console.log("nota invalida");
}

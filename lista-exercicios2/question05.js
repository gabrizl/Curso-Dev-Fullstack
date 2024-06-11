//Crie um jogo de JoKenPo (Pedra-Papel-Tesoura).
const prompt = require("prompt-sync")();

console.log("choose a number:\n1-Rock 2-Paper 3-Scissor\n");

let choice = parseInt(prompt());
let randomNumber =parseInt(Math.random() * 3 + 1);

switch (choice) {
  case 1:
    if (randomNumber === 1) {
      console.log(`Computer choice:${randomNumber}\nDraw`);
    } else if (randomNumber === 2) {
      console.log(`Computer choice:${randomNumber}\nComputer wins!`);
    } else if (randomNumber === 3) {
      console.log(`Computer choice:${randomNumber}\nYou win!`);
    }
    break;
  case 2:
    if (randomNumber === 2) {
      console.log(`Computer choice:${randomNumber}\nDraw`);
    } else if (randomNumber === 3) {
      console.log(`Computer choice:${randomNumber}\nComputer wins!`);
    }
    break;
  case 3:
    if (randomNumber === 3) {
      console.log(`Computer choice:${randomNumber}\nDraw`);
    }
    break;
  default:
    console.log("Invalid number");
}


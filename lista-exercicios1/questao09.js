const prompt = require("prompt-sync")();

let codigo = parseInt(prompt("Digite o código:"));

switch (codigo) {
  case 1:
    console.log("Sul");
    break;
  case 2:
    console.log("Norte");
    break;
  case 3:
    console.log("Leste");
    break;
  case 4:
    console.log("Oeste");
    break;
  case 5:
  case 6:
    console.log("Nordeste");
    break;
  case 7:
  case 8:
  case 9:
    console.log("Sudeste");
    break;
  default:
    if (codigo >= 10 && codigo <= 20) {
      console.log("Centro-Oeste");
    } else if (codigo >= 25 && codigo <= 50) {
      console.log("Nordeste");
    } else {
      console.log("Produto Importado");
    }
    break;
}

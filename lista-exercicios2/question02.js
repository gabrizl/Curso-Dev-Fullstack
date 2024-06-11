const prompt = require("prompt-sync")();

let speed = parseInt(prompt("Insert the car speed: "));

if (speed > 80) {
  let overSpeed = speed - 80;
  let traffic_ticket = overSpeed * 5;

  console.log(`You were fined in R$${traffic_ticket}`);
} else if (speed <= 0) {
  console.log("Invalid number!");
} else {
  console.log("You were not fined");
}

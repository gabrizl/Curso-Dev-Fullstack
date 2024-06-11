const prompt = require("prompt-sync")();

let carType = parseInt(
  prompt("1 - Popular car | 2 - Luxury Car\n Choose a Car type: ")
);
let popularPrice = 90;
let luxuryPrice = 150
let distance = parseInt(prompt("How many Kilometers you drove: "));
let price;

if (carType === 1) {
  if (distance > 0 && distance < 101) {
    price = popularPrice + distance * 0.2;
    console.log(`the final price is R$ ${price}`);
  } else if (distance > 100) {
    price = popularPrice + distance * 0.2;
    console.log(`the final price is R$ ${price}`);
  } else {
    console.log("invalid value!");
  }
} else if (carType === 2) {
  if (distance > 0 && distance < 201) {
    price = luxuryPrice + distance * 0.3;
    console.log(`the final price is R$ ${price}`);
  } else if (distance > 200) {
    price = luxuryPrice + distance * 0.25;
    console.log(`the final price is R$ ${price}`);
  } else {
    console.log("invalid value!");
  }
} else {
  console.log("invalid number!");
}

const prompt = require("prompt-sync")();

let sum = 0;
let count = 0;
let min = null;
let evenCount = 0;
let continueInput;

do {
  let number = parseInt(prompt("Enter a number:\n"));

  if (isNaN(number)) {
    console.log("Please enter a valid number.");
    continue;
  }

  sum += number;
  count++;

  if (min === null || number < min) {
    min = number;
  }

  if (number % 2 === 0) {
    evenCount++;
  }

  continueInput = prompt("Do you want to continue? (y/n):\n").toLowerCase();
} while (continueInput === "y");

if (count > 0) {
  let average = sum / count;
  console.log(`Sum of all values: ${sum}`);
  console.log(`Smallest value entered: ${min}`);
  console.log(`Average of all values: ${average}`);
  console.log(`Count of even values: ${evenCount}`);
} else {
  console.log("No values were entered.");
}

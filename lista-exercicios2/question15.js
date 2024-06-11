const prompt = require('prompt-sync')();

let numbers = [];

for (let i = 0; i < 10; i++) {
  let number = parseInt(prompt(`Enter integer number ${i + 1}:\n`), 10);
  numbers.push(number);
}

console.log("The even numbers and their positions are:");
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    console.log(`Number ${numbers[i]} at position ${i}`);
  }
}

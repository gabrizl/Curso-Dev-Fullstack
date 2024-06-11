const prompt = require('prompt-sync')();

const firstTerm = parseInt(prompt("Enter the first term of the arithmetic progression (AP):\n"));
const rate = parseInt(prompt("Enter the common difference of the AP:\n"));

if (isNaN(firstTerm) || isNaN(rate)) {
  console.log("Please enter valid numbers for the first term and common difference.");
} else {
  let apSequence = [];
  let sum = 0;

  for (let i = 0; i < 10; i++) {
    let term = firstTerm + i * rate;
    apSequence.push(term);
    sum += term;
  }

  console.log("The first 10 elements of the arithmetic progression are:");
  console.log(apSequence.join(", "));
  console.log(`The sum of all the values in the sequence is: ${sum}`);
}

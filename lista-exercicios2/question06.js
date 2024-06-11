const prompt = require('prompt-sync')();

let randomNumber = Math.floor(Math.random() * 5) + 1;
let guess;
console.log("Guess the right number between 1 and 5:\n");
do {
  guess = parseInt(prompt());

  if (isNaN(guess)) {
    console.log("Please enter a valid number.");
  } else if (guess > randomNumber) {
    console.log("Try a smaller number.");
  } else if (guess < randomNumber) {
    console.log("Try a bigger number.");
  }
} while (guess !== randomNumber);

console.log(`You guessed right! The number was ${randomNumber}.`);

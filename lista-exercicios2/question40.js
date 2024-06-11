const prompt = require("prompt-sync")();

function readLotteryResult() {
  let result = [];
  console.log("Enter the official lottery result (5 numbers):");
  for (let i = 0; i < 5; i++) {
    result.push(parseInt(prompt(`Number ${i + 1}: `)));
  }
  return result;
}

function readBets() {
  let bets = [];
  for (let i = 0; i < 50; i++) {
    let bet = [];
    console.log(`Enter bet ${i + 1} (5 numbers):`);
    for (let j = 0; j < 5; j++) {
      bet.push(parseInt(prompt(`Number ${j + 1}: `)));
    }
    bets.push(bet);
  }
  return bets;
}

function checkWinner(officialResult, bet) {
  for (let i = 0; i < 5; i++) {
    if (officialResult[i] !== bet[i]) {
      return false;
    }
  }
  return true;
}

// Main
let officialResult = readLotteryResult();
let bets = readBets();

let winners = 0;

bets.forEach((bet, index) => {
  if (checkWinner(officialResult, bet)) {
    console.log(`Winner in bet ${index + 1}`);
    winners++;
  }
});

console.log(`Total winners: ${winners}`);

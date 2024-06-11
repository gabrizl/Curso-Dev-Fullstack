const prompt = require("prompt-sync")();

function readVector(label) {
  let vector = [];
  console.log(`Enter the ${label} (13 elements):`);
  for (let i = 0; i < 13; i++) {
    vector.push(parseInt(prompt(`Element ${i + 1}: `)));
  }
  return vector;
}

function readBettors(numBettors, numQuestions) {
  let bettors = [];
  for (let i = 0; i < numBettors; i++) {
    console.log(`Enter details for Bettor ${i + 1}:`);
    let bettor = {};
    bettor.number = parseInt(prompt("Enter Bettor number: "));
    bettor.responses = [];
    for (let j = 0; j < numQuestions; j++) {
      bettor.responses.push(parseInt(prompt(`Response ${j + 1}: `)));
    }
    bettors.push(bettor);
  }
  return bettors;
}

function checkAnswers(gabarito, responses) {
  let correctAnswers = 0;
  for (let i = 0; i < gabarito.length; i++) {
    if (gabarito[i] === responses[i]) {
      correctAnswers += 1;
    }
  }
  return correctAnswers;
}

const NUM_BETTORS = 100;
const NUM_QUESTIONS = 13;

let gabarito = readVector("Gabarito");
let bettors = readBettors(NUM_BETTORS, NUM_QUESTIONS);

bettors.forEach((bettor) => {
  let correctAnswers = checkAnswers(gabarito, bettor.responses);
  console.log(
    `Bettor Number: ${bettor.number}, Correct Answers: ${correctAnswers}`
  );
  if (correctAnswers === NUM_QUESTIONS) {
    console.log("Congratulations, you are the WINNER!");
  }
});

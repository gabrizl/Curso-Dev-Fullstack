const prompt = require("prompt-sync")();

function readCharVector(size, label) {
  let vector = [];
  console.log(`Enter the ${label} (${size} elements):`);
  for (let i = 0; i < size; i++) {
    vector.push(prompt(`Element ${i + 1}: `).toUpperCase());
  }
  return vector;
}

function readStudentsResponses(numStudents, numQuestions) {
  let students = [];
  for (let i = 0; i < numStudents; i++) {
    console.log(`Enter responses for Student ${i + 1}:`);
    let responses = [];
    for (let j = 0; j < numQuestions; j++) {
      responses.push(prompt(`Response ${j + 1}: `).toUpperCase());
    }
    students.push(responses);
  }
  return students;
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

const NUM_STUDENTS = 50;
const NUM_QUESTIONS = 20;

let gabarito = readCharVector(NUM_QUESTIONS, "Gabarito");
let studentsResponses = readStudentsResponses(NUM_STUDENTS, NUM_QUESTIONS);

studentsResponses.forEach((responses, index) => {
  let correctAnswers = checkAnswers(gabarito, responses);
  console.log(`Student ${index + 1}, Correct Answers: ${correctAnswers}`);
  if (correctAnswers >= 12) {
    console.log("APPROVED");
  } else {
    console.log("FAILED");
  }
});

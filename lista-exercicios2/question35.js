const prompt = require("prompt-sync")();

function isEven(number) {
  return number % 2 === 0;
}

function printVector(vector, label) {
  console.log(`${label}: [${vector.join(", ")}]`);
}

const TOTAL_VALUES = 30;
const VECTOR_SIZE = 5;

let evenVector = [];
let oddVector = [];

for (let i = 0; i < TOTAL_VALUES; i++) {
  let value = parseInt(prompt(`Enter value ${i + 1} of ${TOTAL_VALUES}: `));

  if (isEven(value)) {
    evenVector.push(value);
    if (evenVector.length === VECTOR_SIZE) {
      printVector(evenVector, "Even Vector");
      evenVector = [];
    }
  } else {
    oddVector.push(value);
    if (oddVector.length === VECTOR_SIZE) {
      printVector(oddVector, "Odd Vector");
      oddVector = [];
    }
  }
}

if (evenVector.length > 0) {
  printVector(evenVector, "Remaining Even Vector");
}

if (oddVector.length > 0) {
  printVector(oddVector, "Remaining Odd Vector");
}

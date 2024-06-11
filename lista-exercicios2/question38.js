const prompt = require("prompt-sync")();

function readVector(size) {
  let vector = [];
  console.log(`Enter ${size} elements:`);
  for (let i = 0; i < size; i++) {
    vector.push(parseFloat(prompt(`Element ${i + 1}: `)));
  }
  return vector;
}

function sumElements(vector) {
  return vector.reduce((sum, num) => sum + num, 0);
}

function productElements(vector) {
  return vector.reduce((product, num) => product * num, 1);
}

function averageElements(vector) {
  return sumElements(vector) / vector.length;
}

function sortElements(vector) {
  return vector.slice().sort((a, b) => a - b);
}

function displayVector(vector) {
  console.log(`Vector: [${vector.join(", ")}]`);
}

const VECTOR_SIZE = 6;
let vector = readVector(VECTOR_SIZE);

console.log("Choose an operation:");
console.log("1 - Sum of the elements");
console.log("2 - Product of the elements");
console.log("3 - Average of the elements");
console.log("4 - Sort the elements in ascending order");
console.log("5 - Display the vector");
let operation = parseInt(prompt("Enter the operation number: "));

switch (operation) {
  case 1:
    console.log(`Sum of the elements: ${sumElements(vector)}`);
    break;
  case 2:
    console.log(`Product of the elements: ${productElements(vector)}`);
    break;
  case 3:
    console.log(`Average of the elements: ${averageElements(vector)}`);
    break;
  case 4:
    console.log(`Sorted Vector: [${sortElements(vector).join(", ")}]`);
    break;
  case 5:
    displayVector(vector);
    break;
  default:
    console.log("Invalid operation number.");
}

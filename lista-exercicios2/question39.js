const prompt = require("prompt-sync")();

function readVector(size) {
  let vector = [];
  console.log(`Enter ${size} elements:`);
  for (let i = 0; i < size; i++) {
    let element = parseFloat(prompt(`Element ${i + 1}: `));
    vector.push(element);
  }
  return vector;
}

function compactVector(vector) {
  return vector.filter((element) => element !== null && element >= 0);
}

const VECTOR_SIZE = 100;
let vectorA = readVector(VECTOR_SIZE);
let vectorB = compactVector(vectorA);

console.log(`Original Vector A: [${vectorA.join(", ")}]`);
console.log(`Compacted Vector B: [${vectorB.join(", ")}]`);

const prompt = require("prompt-sync")();

function canFormTriangle(a, b, c) {
  return a < b + c && b < a + c && c < a + b;
}

console.log("Enter the lengths of three segments of a line:");

let segment1 = parseFloat(prompt("Length of segment 1: "));
let segment2 = parseFloat(prompt("Length of segment 2: "));
let segment3 = parseFloat(prompt("Length of segment 3: "));

if (canFormTriangle(segment1, segment2, segment3)) {
  console.log("The segments can form a triangle.");
} else {
  console.log("The segments cannot form a triangle.");
}

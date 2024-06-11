const prompt = require("prompt-sync")();

function createMatrix(rows, cols) {
  let matrix = [];
  for (let i = 0; i < rows; i++) {
    let row = [];
    for (let j = 0; j < cols; j++) {
      row.push(parseFloat(prompt(`Enter element M[${i + 1}][${j + 1}]: `)));
    }
    matrix.push(row);
  }
  return matrix;
}

function calculateSums(matrix) {
  let SL = []; // Vector to store sums of rows
  let SC = []; // Vector to store sums of columns

  for (let i = 0; i < matrix.length; i++) {
    SL.push(0);
    SC.push(0);
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      SL[i] += matrix[i][j];
      SC[j] += matrix[i][j];
    }
  }

  return { SL, SC };
}

function printMatrix(matrix) {
  console.log("Matrix M:");
  for (let row of matrix) {
    console.log(row.join(" "));
  }
}

function printVector(vector, name) {
  console.log(`${name}: [${vector.join(", ")}]`);
}

const ROWS = 5;
const COLS = 5;

console.log("Enter the elements of the 5x5 matrix:");
let matrix = createMatrix(ROWS, COLS);

let { SL, SC } = calculateSums(matrix);

printMatrix(matrix);
printVector(SL, "SL");
printVector(SC, "SC");

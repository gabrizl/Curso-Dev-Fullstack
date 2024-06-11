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

function multiplyMatrixByScalar(matrix, scalar) {
  let vector = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      vector.push(matrix[i][j] * scalar);
    }
  }
  return vector;
}

function printMatrix(matrix) {
  console.log("Matrix M:");
  for (let row of matrix) {
    console.log(row.join(" "));
  }
}

function printVector(vector) {
  console.log("Vector V:");
  console.log(vector.join(" "));
}

const ROWS = 6;
const COLS = 6;

console.log("Enter the elements of matrix M[6][6]:");
let matrix = createMatrix(ROWS, COLS);

let scalar = parseFloat(prompt("Enter the value of A: "));

let vector = multiplyMatrixByScalar(matrix, scalar);

printMatrix(matrix);
printVector(vector);

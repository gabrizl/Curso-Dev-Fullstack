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

function maxAbsoluteValue(arr) {
  return Math.max(...arr.map(Math.abs));
}

function divideRowByMax(row) {
  let maxAbsValue = maxAbsoluteValue(row);
  return row.map((value) => value / maxAbsValue);
}

function modifyMatrix(matrix) {
  return matrix.map((row) => divideRowByMax(row));
}

function printMatrix(matrix, label) {
  console.log(`${label}:`);
  for (let row of matrix) {
    console.log(row.join(" "));
  }
}

const ROWS = 12;
const COLS = 13;

console.log("Enter the elements of the 12x13 matrix M:");
let matrixM = createMatrix(ROWS, COLS);
let modifiedMatrixM = modifyMatrix(matrixM);

printMatrix(matrixM, "Original Matrix M");
printMatrix(modifiedMatrixM, "Modified Matrix M");

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

function calculateSecondaryDiagonalMean(matrix) {
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    sum += matrix[i][matrix.length - 1 - i];
  }
  return sum / matrix.length;
}

function modifyMainDiagonal(matrix, mean) {
  let modifiedMatrix = matrix.map((row) => row.slice());
  for (let i = 0; i < matrix.length; i++) {
    modifiedMatrix[i][i] *= mean;
  }
  return modifiedMatrix;
}

function printMatrix(matrix, label) {
  console.log(`${label}:`);
  for (let row of matrix) {
    console.log(row.join(" "));
  }
}

const ROWS = 3;
const COLS = 3;

console.log("Enter the elements of the 3x3 matrix M:");
let matrixM = createMatrix(ROWS, COLS);

let secondaryDiagonalMean = calculateSecondaryDiagonalMean(matrixM);
let modifiedMatrixM = modifyMainDiagonal(matrixM, secondaryDiagonalMean);

printMatrix(matrixM, "Original Matrix M");
console.log(`Mean of secondary diagonal: ${secondaryDiagonalMean.toFixed(2)}`);
printMatrix(modifiedMatrixM, "Modified Matrix M");

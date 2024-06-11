const prompt = require("prompt-sync")();

function createMatrix(size) {
  let matrix = [];
  for (let i = 0; i < size; i++) {
    let row = [];
    for (let j = 0; j < size; j++) {
      row.push(parseFloat(prompt(`Enter element M[${i + 1}][${j + 1}]: `)));
    }
    matrix.push(row);
  }
  return matrix;
}

function modifyMatrix(matrix) {
  let size = matrix.length;
  let modifiedMatrix = matrix.map((row) => row.slice());
  for (let i = 0; i < size; i++) {
    let diagonalElement = matrix[i][i];
    for (let j = 0; j < size; j++) {
      modifiedMatrix[i][j] *= diagonalElement;
    }
  }
  return modifiedMatrix;
}

function printMatrix(matrix, label) {
  console.log(`${label}:`);
  for (let row of matrix) {
    console.log(row.join(" "));
  }
}

const SIZE = 50;

console.log("Enter the elements of the 50x50 matrix M:");
let matrixM = createMatrix(SIZE);
let modifiedMatrixM = modifyMatrix(matrixM);

printMatrix(matrixM, "Original Matrix M");
printMatrix(modifiedMatrixM, "Modified Matrix M");

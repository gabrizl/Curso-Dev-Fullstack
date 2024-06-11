const prompt = require('prompt-sync')();

function createMatrix(rows, cols, name) {
  let matrix = [];
  for (let i = 0; i < rows; i++) {
    let row = [];
    for (let j = 0; j < cols; j++) {
      row.push(parseFloat(prompt(`Enter element ${name}[${i+1}][${j+1}]: `)));
    }
    matrix.push(row);
  }
  return matrix;
}

function multiplyMatrices(matrixA, matrixB, rows, cols) {
  let productMatrix = [];
  for (let i = 0; i < rows; i++) {
    let row = [];
    for (let j = 0; j < cols; j++) {
      row.push(matrixA[i][j] * matrixB[i][j]);
    }
    productMatrix.push(row);
  }
  return productMatrix;
}

function printMatrix(matrix, name) {
  console.log(`${name} Matrix:`);
  for (let row of matrix) {
    console.log(row.join(" "));
  }
}

const ROWS = 3;
const COLS = 5;

console.log("Enter the elements of matrix A[3][5]:");
let matrixA = createMatrix(ROWS, COLS, 'A');

console.log("Enter the elements of matrix B[3][5]:");
let matrixB = createMatrix(ROWS, COLS, 'B');

let productMatrix = multiplyMatrices(matrixA, matrixB, ROWS, COLS);

printMatrix(matrixA, 'A');
printMatrix(matrixB, 'B');
printMatrix(productMatrix, 'Product');

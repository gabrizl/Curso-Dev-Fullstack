const prompt = require('prompt-sync')();

function createMatrix(rows, cols) {
  let matrix = [];
  for (let i = 0; i < rows; i++) {
    let row = [];
    for (let j = 0; j < cols; j++) {
      row.push(parseFloat(prompt(`Enter element M[${i+1}][${j+1}]: `)));
    }
    matrix.push(row);
  }
  return matrix;
}

function sumColumns(matrix, rows, cols) {
  let columnSums = Array(cols).fill(0);
  for (let j = 0; j < cols; j++) {
    for (let i = 0; i < rows; i++) {
      columnSums[j] += matrix[i][j];
    }
  }
  return columnSums;
}

function printMatrix(matrix) {
  for (let row of matrix) {
    console.log(row.join(" "));
  }
}

function printColumnSums(columnSums) {
  console.log("Column sums:");
  for (let j = 0; j < columnSums.length; j++) {
    console.log(`Sum of column ${j+1}: ${columnSums[j].toFixed(2)}`);
  }
}

const ROWS = 15;
const COLS = 20;

console.log("Enter the elements of the 15x20 matrix:");
let matrix = createMatrix(ROWS, COLS);

console.log("Matrix:");
printMatrix(matrix);

let columnSums = sumColumns(matrix, ROWS, COLS);

printColumnSums(columnSums);

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

function sumAboveDiagonal(matrix) {
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i + 1; j < matrix[i].length; j++) {
      sum += matrix[i][j];
    }
  }
  return sum;
}

function sumBelowDiagonal(matrix) {
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < i; j++) {
      sum += matrix[i][j];
    }
  }
  return sum;
}

function printMatrix(matrix) {
  console.log("Matrix M:");
  for (let row of matrix) {
    console.log(row.join(" "));
  }
}

const ROWS = 10;
const COLS = 10;

console.log("Enter the elements of the 10x10 matrix:");
let matrix = createMatrix(ROWS, COLS);

printMatrix(matrix);

let sumAbove = sumAboveDiagonal(matrix);
let sumBelow = sumBelowDiagonal(matrix);

console.log(`Sum of elements above the diagonal principal: ${sumAbove}`);
console.log(`Sum of elements below the diagonal principal: ${sumBelow}`);

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

function countNegatives(matrix) {
  let negativesCount = [];
  for (let i = 0; i < matrix.length; i++) {
    let count = 0;
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] < 0) {
        count++;
      }
    }
    negativesCount.push(count);
  }
  return negativesCount;
}

function printMatrix(matrix) {
  for (let row of matrix) {
    console.log(row.join(" "));
  }
}

function printVector(vector) {
  console.log("Vector C (count of negative elements per row):");
  console.log(vector.join(" "));
}

const ROWS = 6;
const COLS = 8;

console.log("Enter the elements of the matrix M[6][8]:");
let matrix = createMatrix(ROWS, COLS);

console.log("Matrix M:");
printMatrix(matrix);

let negativeCounts = countNegatives(matrix);

printVector(negativeCounts);

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

function sumRow(matrix, rowIndex) {
  return matrix[rowIndex].reduce((sum, value) => sum + value, 0);
}

function sumColumn(matrix, colIndex) {
  return matrix.reduce((sum, row) => sum + row[colIndex], 0);
}

function sumDiagonalPrincipal(matrix) {
  return matrix.reduce((sum, row, index) => sum + row[index], 0);
}

function sumAllElements(matrix) {
  return matrix.flat().reduce((sum, value) => sum + value, 0);
}

function printMatrix(matrix) {
  console.log("Matrix M:");
  for (let row of matrix) {
    console.log(row.join(" "));
  }
}

const ROWS = 5;
const COLS = 5;

console.log("Enter the elements of the 5x5 matrix:");
let matrix = createMatrix(ROWS, COLS);

printMatrix(matrix);

let sumRow4 = sumRow(matrix, 3); // 4th row (index 3)
let sumColumn2 = sumColumn(matrix, 1); // 2nd column (index 1)
let sumDiagonal = sumDiagonalPrincipal(matrix);
let sumAll = sumAllElements(matrix);

console.log(`Sum of elements in the 4th row: ${sumRow4}`);
console.log(`Sum of elements in the 2nd column: ${sumColumn2}`);
console.log(`Sum of elements in the diagonal principal: ${sumDiagonal}`);
console.log(`Sum of all elements in the matrix: ${sumAll}`);

const prompt = require("prompt-sync")();

function createMatrix(rows, cols) {
  let matrix = [];
  for (let i = 0; i < rows; i++) {
    let row = [];
    for (let j = 0; j < cols; j++) {
      row.push(parseInt(prompt(`Enter element V[${i + 1}][${j + 1}]: `)));
    }
    matrix.push(row);
  }
  return matrix;
}

function processMatrix(matrix, A) {
  let countA = 0;
  let matrixX = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === A) {
        countA++;
      } else {
        matrixX.push(matrix[i][j]);
      }
    }
  }

  return { countA, matrixX };
}

function printMatrix(matrix) {
  console.log("Matrix V:");
  for (let row of matrix) {
    console.log(row.join(" "));
  }
}

function printVector(vector, name) {
  console.log(`${name}: [${vector.join(", ")}]`);
}

const ROWS = 30;
const COLS = 30;

let A = parseInt(prompt("Enter the integer A: "));
console.log("Enter the elements of the 30x30 matrix V:");
let matrixV = createMatrix(ROWS, COLS);

let { countA, matrixX } = processMatrix(matrixV, A);

printMatrix(matrixV);
console.log(`Number of occurrences of ${A} in matrix V: ${countA}`);
printVector(matrixX, "Matrix X");

function createIdentityMatrix(size) {
    let matrix = [];
  
    for (let i = 0; i < size; i++) {
      let row = [];
      for (let j = 0; j < size; j++) {
        if (i === j) {
          row.push(1);
        } else {
          row.push(0);
        }
      }
      matrix.push(row);
    }
  
    return matrix;
  }
  
  function printMatrix(matrix) {
    for (let row of matrix) {
      console.log(row.join(" "));
    }
  }
  
  // Create a 7x7 identity matrix
  let size = 7;
  let identityMatrix = createIdentityMatrix(size);
  
  // Print the identity matrix
  console.log("Identity Matrix:");
  printMatrix(identityMatrix);
  
let fibonacciSequence = [1, 1];

for (let i = 2; i < 15; i++) {
  let nextElement = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
  fibonacciSequence.push(nextElement);
}

console.log("The first 15 elements of the Fibonacci sequence are:");
console.log(fibonacciSequence.join(", "));

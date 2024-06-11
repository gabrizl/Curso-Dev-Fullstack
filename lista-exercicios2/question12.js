console.log("The first 10 elements of the Fibonacci sequence are:");

let fibonacciSequence = [1, 1];

for (let i = 2; i < 10; i++) {
  let nextElement = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
  fibonacciSequence.push(nextElement);
}

console.log(fibonacciSequence.join(", "));

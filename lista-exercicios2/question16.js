function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let numbers = [];

for (let i = 0; i < 20; i++) {
  numbers.push(getRandomInt(0, 99));
}

console.log("Generated numbers:");
console.log(numbers.join(", "));

numbers.sort((a, b) => a - b);

console.log("Sorted numbers:");
console.log(numbers.join(", "));

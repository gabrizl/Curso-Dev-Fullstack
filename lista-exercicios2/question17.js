const prompt = require('prompt-sync')();

let names = [];
let ages = [];

for (let i = 0; i < 9; i++) {
  let name = prompt(`Enter the name of person ${i + 1}:\n`);
  let age = parseInt(prompt(`Enter the age of ${name}:\n`), 10);
  
  names.push(name);
  ages.push(age);
}

console.log("List of minors:");
for (let i = 0; i < 9; i++) {
  if (ages[i] < 18) {
    console.log(`Name: ${names[i]}, Age: ${ages[i]}`);
  }
}

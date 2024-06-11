const prompt = require('prompt-sync')();

let names = [];

for (let i = 0; i < 7; i++) {
  let name = prompt(`Enter name ${i + 1}:\n`);
  names.push(name);
}

console.log("The names in reverse order are:");
for (let i = names.length - 1; i >= 0; i--) {
  console.log(names[i]);
}

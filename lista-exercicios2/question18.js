const prompt = require("prompt-sync")();

let employee = {
  name: "",
  position: "",
  salary: 0,
};

employee.name = prompt("Enter the employee's name:\n");
employee.position = prompt("Enter the employee's position:\n");
employee.salary = parseFloat(prompt("Enter the employee's salary:\n"));

console.log("Employee Record:");
console.log(`Name: ${employee.name}`);
console.log(`Position: ${employee.position}`);
console.log(`Salary: $${employee.salary.toFixed(2)}`);

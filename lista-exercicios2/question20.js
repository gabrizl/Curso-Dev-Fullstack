const prompt = require("prompt-sync")();

const NUM_EMPLOYEES = 80;
const INSS_DEDUCTION_RATE = 0.12;

let employees = [];

for (let i = 0; i < NUM_EMPLOYEES; i++) {
  console.log(`Enter details for employee ${i + 1}:`);
  let registrationNumber = prompt("Registration number:\n");
  let name = prompt("Name:\n");
  let grossSalary = parseFloat(prompt("Gross salary:\n"));

  employees.push({
    registrationNumber,
    name,
    grossSalary,
  });
}

console.log("Payroll Details:");
for (let employee of employees) {
  let inssDeduction = employee.grossSalary * INSS_DEDUCTION_RATE;
  let netSalary = employee.grossSalary - inssDeduction;

  console.log(`Registration number: ${employee.registrationNumber}`);
  console.log(`Name: ${employee.name}`);
  console.log(`Gross salary: $${employee.grossSalary.toFixed(2)}`);
  console.log(`INSS deduction: $${inssDeduction.toFixed(2)}`);
  console.log(`Net salary: $${netSalary.toFixed(2)}`);
  console.log("---------------------------");
}

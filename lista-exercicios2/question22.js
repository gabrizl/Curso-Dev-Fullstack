const prompt = require("prompt-sync")();

function collectData() {
  let totalSalary = 0;
  let totalChildren = 0;
  let numPeople = 0;
  let highestSalary = 0;
  let lowSalaryCount = 0;
  const lowSalaryThreshold = 350;

  while (true) {
    let salary = parseFloat(
      prompt("Enter the salary (or type 'done' to finish):\n")
    );
    if (isNaN(salary)) break;

    let children = parseInt(prompt("Enter the number of children:\n"), 10);

    totalSalary += salary;
    totalChildren += children;
    numPeople++;

    if (salary > highestSalary) {
      highestSalary = salary;
    }

    if (salary <= lowSalaryThreshold) {
      lowSalaryCount++;
    }
  }

  let averageSalary = totalSalary / numPeople;
  let averageChildren = totalChildren / numPeople;
  let lowSalaryPercentage = (lowSalaryCount / numPeople) * 100;

  return {
    averageSalary: averageSalary.toFixed(2),
    averageChildren: averageChildren.toFixed(2),
    highestSalary: highestSalary.toFixed(2),
    lowSalaryPercentage: lowSalaryPercentage.toFixed(2),
  };
}

console.log("Collecting data from inhabitants...");
let results = collectData();

console.log(`Average Salary: $${results.averageSalary}`);
console.log(`Average Number of Children: ${results.averageChildren}`);
console.log(`Highest Salary: $${results.highestSalary}`);
console.log(
  `Percentage of People with Salary <= $350: ${results.lowSalaryPercentage}%`
);

const prompt = require("prompt-sync")();

let totalMaleSalary = 0;
let totalFemaleSalary = 0;

function calculateSalaryByGender(salary, gender) {
  if (gender === "M") {
    totalMaleSalary += salary;
  } else if (gender === "F") {
    totalFemaleSalary += salary;
  } else {
    console.error("Invalid gender!");
  }
}

function continueApp() {
  let answer = prompt("Do you want to continue? (Y/N)");
  return answer.toUpperCase() === "Y";
}

while (continueApp()) {
  let salary = parseFloat(prompt("Enter salary:"));
  let gender = prompt("Enter gender (M/F):").toUpperCase();

  calculateSalaryByGender(salary, gender);

  console.log(`Total male salary: $${totalMaleSalary}`);
  console.log(`Total female salary: $${totalFemaleSalary}`);
}

console.log("End of program!");

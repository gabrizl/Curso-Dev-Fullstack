function calculateIdealWeight(alt, sex) {
  let idealWeight;

  if (sex.toLowerCase() === "male") {
    idealWeight = 72.7 * alt - 58;
  } else if (sex.toLowerCase() === "female") {
    idealWeight = 62.1 * alt - 44.7;
  } else {
    throw new Error("Invalid sex. Please use 'male' or 'female'.");
  }

  return idealWeight;
}

const prompt = require("prompt-sync")();

let alt = parseFloat(prompt("Enter the height (in meters):\n"));
let sex = prompt("Enter the sex (male/female):\n");

try {
  let idealWeight = calculateIdealWeight(alt, sex);
  console.log(`The ideal weight is: ${idealWeight.toFixed(2)} kg`);
} catch (error) {
  console.error(error.message);
}

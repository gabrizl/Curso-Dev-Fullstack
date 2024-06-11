const prompt = require("prompt-sync")();

function isValidTime(hour, minute, second) {
  return (
    hour >= 0 &&
    hour <= 23 &&
    minute >= 0 &&
    minute <= 59 &&
    second >= 0 &&
    second <= 59
  );
}

let times = [];

for (let i = 0; i < 5; i++) {
  let validTime = false;
  let hour, minute, second;

  while (!validTime) {
    hour = parseInt(prompt(`Enter hour (0-23) for time ${i + 1}:\n`));
    minute = parseInt(prompt(`Enter minute (0-59) for time ${i + 1}:\n`));
    second = parseInt(prompt(`Enter second (0-59) for time ${i + 1}:\n`));

    if (isValidTime(hour, minute, second)) {
      validTime = true;
    } else {
      console.log("Invalid time entered. Please try again.");
    }
  }

  times.push({ hour, minute, second });
}

console.log("Entered times in HH.MM.SS format:");
for (let i = 0; i < times.length; i++) {
  let { hour, minute, second } = times[i];
  console.log(
    `${String(hour).padStart(2, "0")}.${String(minute).padStart(
      2,
      "0"
    )}.${String(second).padStart(2, "0")}`
  );
}

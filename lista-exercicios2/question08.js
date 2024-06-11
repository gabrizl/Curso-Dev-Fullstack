const prompt = require("prompt-sync")();

function calculatePoints(activityHours) {
    let points = 0;
  
    if (activityHours <= 10) {
      points = activityHours * 2;
    } else if (activityHours <= 20) {
      points = 20 * 2 + (activityHours - 10) * 5;
    } else {
      points = 20 * 2 + 10 * 5 + (activityHours - 20) * 10;
    }
  
    return points;
  }
  
  function calculateMoneyValue(points) {
    return points * 0.05;
  }
  
  function main() {
    const activityHours = parseFloat(prompt("Enter the number of hours of physical activity you had in the month: "));
  
    const points = calculatePoints(activityHours);
    const moneyValue = calculateMoneyValue(points);
  
    console.log(`You earned ${points} points.`);
    console.log(`You earned R$ ${moneyValue.toFixed(2)}`);
  }
  
  main();
  
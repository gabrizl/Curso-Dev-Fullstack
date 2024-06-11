function countStringProperties(obj) {
  let count = 0;
  for (let key in obj) {
    if (typeof obj[key] === "string") {
      count++;
    }
  }
  return count;
}

let exampleObj = {
  name: "Alice",
  age: 25,
  occupation: "Engineer",
  email: "alice@example.com",
  hobbies: ["reading", "traveling"],
  isActive: true,
};

let stringPropertyCount = countStringProperties(exampleObj);

console.log("Number of string properties:", stringPropertyCount);

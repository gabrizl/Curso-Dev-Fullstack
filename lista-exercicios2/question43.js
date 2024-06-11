let obj1 = {
  name: "Alice",
  age: 25,
  hobbies: ["reading", "traveling"],
  occupation: "Engineer",
};

let obj2 = {
  age: 30,
  hobbies: ["cooking", "dancing"],
  email: "alice@example.com",
};

function combineObjects(obj1, obj2) {
  let combinedObject = { ...obj1, ...obj2 };
  return combinedObject;
}

let combined = combineObjects(obj1, obj2);

console.log("Combined Object:", combined);

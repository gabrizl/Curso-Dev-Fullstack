let dados = {
  name: "Alice",
  age: 30,
  hobbies: ["reading", "traveling", "cooking"],
  address: {
    street: "123 Main St",
    city: "Anytown",
  },
  favoriteNumbers: [3, 7, 42],
  occupation: "Engineer",
};

function getArrayProperties(obj) {
  let result = {};
  for (let key in obj) {
    if (Array.isArray(obj[key])) {
      result[key] = obj[key];
    }
  }
  return result;
}

let arrayProperties = getArrayProperties(dados);

console.log("Array Properties:", arrayProperties);

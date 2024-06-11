function countStrings(arr) {
  let result = {};
  arr.forEach((str) => {
    if (result[str]) {
      result[str]++;
    } else {
      result[str] = 1;
    }
  });
  return result;
}

let stringArray = ["apple", "banana", "apple", "orange", "banana", "apple"];

let stringCounts = countStrings(stringArray);

console.log("String Counts:", stringCounts);

function transformObject(obj, transformFn) {
  let result = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = transformFn(obj[key]);
    }
  }
  return result;
}

function square(x) {
  return x * x;
}

let inputObject = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
};

let transformedObject = transformObject(inputObject, square);

console.log("Transformed Object:", transformedObject);

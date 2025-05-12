let original = {
  a: 1,
  b: 2,
  c: 3
};

let newObject = {};


for (let key in original) {
  newObject[key] = original[key];
}


console.log(newObject);
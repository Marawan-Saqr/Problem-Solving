function checkValuePresence(value, fruits) {

  let myUniqueValues = new Set(fruits);

  return myUniqueValues.has(value);

}


console.log(checkValuePresence("banana", ["apple", "banana", "cherry"]));
console.log(checkValuePresence("orange", ["apple", "banana", "cherry"]));
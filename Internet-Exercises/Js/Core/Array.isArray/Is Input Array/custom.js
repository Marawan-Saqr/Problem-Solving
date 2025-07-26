function isInputArray(input) {
  return Array.isArray(input);
}



console.log(isInputArray([1, 2, 3]));
console.log(isInputArray("hello"));
console.log(isInputArray({a: 1}));
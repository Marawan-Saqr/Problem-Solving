function addNumbers(a, b, callback) {

  let result = a + b;
  return callback(result);

}


console.log(addNumbers(5, 7, function(result) {
  return `The Result Is ${result}`;
}));
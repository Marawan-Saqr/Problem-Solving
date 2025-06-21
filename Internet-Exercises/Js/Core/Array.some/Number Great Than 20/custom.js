const numbers = [5, 11, 8, 22, 7];

let result = numbers.some(function(num) {
  return num > 20;
})

console.log(result);
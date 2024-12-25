let numbers = [80, 3, 20, 75, 32, 11];

let result = numbers.reduce((acc, current)=> {
  return acc + current;
})

console.log(result);
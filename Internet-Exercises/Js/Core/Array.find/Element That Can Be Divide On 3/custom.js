const numbers = [4, 8, 15, 23, 42];

let result = numbers.find((element)=> {
  return element % 3 === 0;
})

console.log(result);
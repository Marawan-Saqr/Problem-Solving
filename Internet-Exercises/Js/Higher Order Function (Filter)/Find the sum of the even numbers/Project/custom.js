let numbers = [1, 3, 4, 6, 2, 10];
let evenNumbers = numbers.filter((element)=> {
  return element % 2 === 0;
}).reduce((acc, current)=> {
  return acc + current;
})

console.log(evenNumbers);
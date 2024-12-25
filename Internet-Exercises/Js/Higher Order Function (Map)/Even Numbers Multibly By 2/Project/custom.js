let numbers = [3, 4, 3, 1, 5, 7, 4];

let result = numbers.filter((element)=> element % 2 === 0)
.map((element)=> element * 2);

console.log(result);
let numbers = [4, 5, 7, 12, 2];

let result = numbers.reduce((acc, current) => {
  return acc > current ? acc : current; 
});


console.log(result);
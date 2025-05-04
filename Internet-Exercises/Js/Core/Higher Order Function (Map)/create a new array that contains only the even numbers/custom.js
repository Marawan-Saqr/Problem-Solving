const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


evenNumbers = numbers.map(function(element){
  if (element % 2 === 0) {
    return element;
  }
  return [];
}).flat();


console.log(evenNumbers);




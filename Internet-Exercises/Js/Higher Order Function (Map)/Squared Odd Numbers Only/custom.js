const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let squareOdd = numbers.map(function(element){
  if (element % 2 !== 0) {
    return Math.pow(element, 2);
  } else {
    return element;
  }
});


console.log(squareOdd);


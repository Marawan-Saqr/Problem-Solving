let arrayOfNumbers = [4, 5, 6, 1, 2, 11, 19, 7, 21];

let newNumbers = arrayOfNumbers.filter(function(e){
  return e > 10;
});


console.log(newNumbers);
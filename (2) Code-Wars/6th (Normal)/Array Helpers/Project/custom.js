// Square Function
Array.prototype.square = function() {
  let result = this.map((element)=> {
    return Math.pow(element, 2);
  });
  return result;
}


// Cube Function
Array.prototype.cube = function() {
  let result = this.map((element)=> {
    return Math.pow(element, 3);
  });
  return result;
}


// Sum Function
Array.prototype.sum = function() {
  let result = this.reduce((acc, current)=> {
    return acc + current;
  }, 0);
  return result;
}


// Average Function
Array.prototype.average = function() {
  let result = this.reduce((acc, current)=> {
    return acc + current;
  }, 0);
  return result / this.length;
}


// Even Function
Array.prototype.even = function() {
  let result = this.filter((element)=> {
    return element % 2 === 0;
  }, 0);
  return result;
}


// Odd Function
Array.prototype.odd = function() {
  let result = this.filter((element)=> {
    return element % 2 !== 0;
  }, 0);
  return result;
}


let numbers = [1, 2, 3, 4, 5];

console.log(numbers.square(numbers));
console.log(numbers.cube(numbers));
console.log(numbers.average(numbers));
console.log(numbers.sum(numbers));
console.log(numbers.even(numbers));
console.log(numbers.odd(numbers));
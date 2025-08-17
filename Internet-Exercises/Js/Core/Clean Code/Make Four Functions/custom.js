let arrayOfNumbers = [1, 2, 3, 4, 5];


// Calculate Sum Of Numbers
function calculateSum(numbers) {
  let result = numbers.reduce((acc, current)=> {
    return acc + current;
  }, 0);
  return result;
}


// Find Max Number
function findMax(numbers) {
  return Math.max(...numbers);
}


// Calculate Average Of Numbers
function calculateAverage(numbers) {
  return calculateSum(numbers) / numbers.length;
}


// Check If Array Has Numbers
function analyzeNumbers(numbers) {
  if (numbers.length === 0) {
    return "Error No Numbers";
  } else {
    return "Ok Function Worked";
  }
}

// Example usage
console.log("Analyze => " + analyzeNumbers(arrayOfNumbers));
console.log("Sum => " + calculateSum(arrayOfNumbers));
console.log("Max => " + findMax(arrayOfNumbers));
console.log("Average => " + calculateAverage(arrayOfNumbers));
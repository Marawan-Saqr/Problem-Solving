function twoSum(numbers, target) {

  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        if (i !== j) {
          result.push(i, j);
          return result;
        } 
      }
    }
  }

}



console.log(twoSum([2, 2, 3], 4));
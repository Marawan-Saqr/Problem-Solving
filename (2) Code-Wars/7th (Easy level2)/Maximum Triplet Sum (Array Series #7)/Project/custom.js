function maxTriSum(numbers) {

  let uniqueElements = [...new Set(numbers)];

  let [one, two, three] = uniqueElements.sort((a, b) => b - a);

  return one + two + three;

}


console.log(maxTriSum([3, 2, 6, 8, 2, 3]));
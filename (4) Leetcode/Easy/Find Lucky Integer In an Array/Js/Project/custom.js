var findLucky = function(arr) {
  // Step 1: Create a Set to get unique elements
  const uniqueElements = new Set(arr);
  
  let largestLucky = -1;

  // Step 2: Iterate through the Set and find the lucky integers
  for (let num of uniqueElements) {
    // Count the frequency of the number in the array
    const frequency = arr.filter(x => x === num).length;
    
    // Check if it's a lucky integer
    if (num === frequency) {
      largestLucky = Math.max(largestLucky, num);
    }
  }

  return largestLucky;
};

console.log(findLucky([2, 2, 3, 3, 3, 4])); // Output: 3

function kSumSubset(numArray, k) {

  let n = numArray.length;
  for (let i = 0; i < (1 << n); i++) { 
    let subsetSum = 0; 
    for (let j = 0; j < n; j++) {
      if (i & (1 << j)) {
        subsetSum += numArray[j];
      }
      if (subsetSum == k) {
        return true;
      }
    }
  }

  return false;

}

console.log(kSumSubset([7, 3, 2, 5, 8], 14));

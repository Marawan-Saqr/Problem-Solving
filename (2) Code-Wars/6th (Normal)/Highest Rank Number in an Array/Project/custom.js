function mostFrequentNumber(arr) {
  let freqMap = {};
  let maxNum = arr[0], maxCount = 0;

  for (let num of arr) {
      freqMap[num] = (freqMap[num] || 0) + 1;

      if (freqMap[num] > maxCount || (freqMap[num] === maxCount && num > maxNum)) {
          maxCount = freqMap[num];
          maxNum = num;
      }
  }

  return maxNum;
}


console.log(mostFrequentNumber([1, 3, 2, 3, 4, 1, 3, 2, 1, 1]));
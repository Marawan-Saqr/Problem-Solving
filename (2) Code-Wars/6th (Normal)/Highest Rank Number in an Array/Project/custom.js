function highestRank(arr) {

  let freqObject = {};
  for (let i = 0; i < arr.length; i++) {
    if (freqObject[arr[i]]) {
      freqObject[arr[i]]++;
    } else {
      freqObject[arr[i]] = 1;
    }
  }

  let maxKey = Object.values(freqObject).reduce((acc, current)=> {
    return freqObject[acc] > freqObject[current] ? acc : current
  });

  return Number(maxKey);

}



console.log(highestRank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]));
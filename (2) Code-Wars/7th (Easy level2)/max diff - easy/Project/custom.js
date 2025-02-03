function maxDiff(list) {

  if (list.length === 0 || list.length === 1) {
    return 0;
  }

  let minNumber = Math.min(...list);
  let maxNumber = Math.max(...list);

  return maxNumber - minNumber;

}


console.log(maxDiff([1, 2, 3, 4]));
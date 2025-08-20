function sequenceClassifier(arr) {

  let hasIncrease = false;
  let hasDecrease = false;
  let hasEqual = false;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      hasIncrease = true;
    } else if (arr[i] < arr[i - 1]) {
      hasDecrease = true;
    } else {
      hasEqual = true;
    }
  }


  if (hasIncrease && !hasDecrease && !hasEqual) {
    return 1; // strictly increasing
  } else if (hasIncrease && !hasDecrease && hasEqual) {
    return 2; // not decreasing
  } else if (hasDecrease && !hasIncrease && !hasEqual) {
    return 3; // strictly decreasing
  } else if (hasDecrease && !hasIncrease && hasEqual) {
    return 4; // not increasing
  } else if (!hasIncrease && !hasDecrease && hasEqual) {
    return 5; // constant
  } else {
    return 0; // unordered
  }

}

console.log(sequenceClassifier([14, 9, 8, 5, 3, 1]));
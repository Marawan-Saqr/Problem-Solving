function isPalindrome(x) {

  let normalResult = "";

  for (let i = 0; i < x.length; i++) {
    normalResult += x[i].toUpperCase();
  }

  let reversedResult = "";

  for (let j = x.length - 1; j >= 0; j--) {
    reversedResult += x[j].toUpperCase();
  }

  if (normalResult === reversedResult) {
    return true;
  } else {
    return false;
  }

}

console.log(isPalindrome("Abba"));
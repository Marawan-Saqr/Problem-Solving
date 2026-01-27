function isPalindrome(x) {

  let lowerAll = x.toLowerCase();
  let result = "";
  for (let i = lowerAll.length - 1; i >= 0; i--) {
    result += lowerAll[i];
  }

  return result === lowerAll ? true : false;

}


console.log(isPalindrome("Abba"));
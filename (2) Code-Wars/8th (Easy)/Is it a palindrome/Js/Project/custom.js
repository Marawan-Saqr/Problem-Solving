function isPalindrome(x) {

  let firstResult = "";
  let secondResult = "";

  for (let i = 0; i < x.length; i++) {
    firstResult += x[i].toLowerCase();
  }

  for (let i = x.length - 1; i >= 0; i--) {
    secondResult += x[i].toLowerCase();
  }

  if (firstResult === secondResult) {
    return true;
  } else {
    return false;
  }

}


console.log(isPalindrome("Aba"));
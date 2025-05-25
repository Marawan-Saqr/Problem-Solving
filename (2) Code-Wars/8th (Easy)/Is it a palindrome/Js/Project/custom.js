function isPalindrome(x) {

  const origin = x.split("").join("").toLowerCase();
  const reverse = x.split("").reverse().join("").toLowerCase();

  if (origin === reverse) {
    return true;
  } else {
    return false;
  }

}


console.log(isPalindrome("hello"));
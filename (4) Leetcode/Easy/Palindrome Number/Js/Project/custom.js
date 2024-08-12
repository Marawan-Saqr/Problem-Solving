let isPalindrome = function(x) {

  let converted = x.toString();
  let result = "";
  let secondResult = "";

  for (let i = 0; i < converted.length; i++) {
    result += converted[i];
  }

  for (let i = converted.length - 1; i >= 0; i--) {
    secondResult += converted[i];
  }

  if (result === secondResult) {
    return true;
  } else {
    return false;
  }


}

console.log(isPalindrome(121));
let isPalindrome = function(x) {

  let stringedNumber = x.toString();

  let start = "";
  for (let i = 0; i < stringedNumber.length; i++) {
    start += stringedNumber[i];
  }

  let end = "";
  for (let i = stringedNumber.length - 1; i >= 0; i--) {
    end += stringedNumber[i];
  }


  return start === end ? true : false;

}

console.log(isPalindrome(121));
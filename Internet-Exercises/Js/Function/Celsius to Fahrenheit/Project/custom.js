function reverseString(str) {
  let reversed = str.split("").reverse().join("");
  return reversed;
}

function isPalindrome(str) {
  return str === reverseString(str);
}



const str = "racecar";
const reversed = reverseString(str);
const palindromeCheck = isPalindrome(str);

console.log(`Reversed: ${reversed}, Is Palindrome: ${palindromeCheck}`);
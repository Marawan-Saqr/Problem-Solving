function isPalindrome(word) {
  let right = "";
  let original = word.toLowerCase();
  for (let i = word.length - 1; i >= 0; i--) {
    right += original[i];
  }
  
  if (right === original) {
    return true;
  } else {
    return false;
  }
}


console.log(isPalindrome("Abba"));

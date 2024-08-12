function isPalindrome(line) {
  return String(line) === String(line).split('').reverse().join('');
}

console.log(isPalindrome("anna")); // true
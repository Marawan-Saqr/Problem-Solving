function isPalindrome(line) {

  let stringed = line.toString();

  let reversed = "";
  for (let i = stringed.length - 1; i >= 0; i--) {
    reversed += stringed[i];
  }

  return stringed === reversed;

}

console.log(isPalindrome(12321));
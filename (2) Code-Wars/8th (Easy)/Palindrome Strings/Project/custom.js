function isPalindrome(line) {

  let newLine;
  newLine = line.toString();

  let first = "";
  let end = "";
  for (let i = 0; i < newLine.length; i++) {
    first += newLine[i];
  }

  for (let i = newLine.length - 1; i >= 0; i--) {
    end += newLine[i];
  }

  if (first === end) {
    return true;
  } else {
    return false;
  }

}

console.log(isPalindrome(12321));
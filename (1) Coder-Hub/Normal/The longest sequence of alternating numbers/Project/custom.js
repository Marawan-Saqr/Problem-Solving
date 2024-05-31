function longestAlternatingSubstring(digits) {
  let empty = [];
  for (let i = 0; i < digits.length; i++) {
    if (digits[i] % 2 === 0) {
      empty.push(0);
    } else {
      empty.push(1);
    }
  }             // [0101101000111100]

  let current = digits[0];
  let result = "";

  for (let j = 1; j < empty.length; j++) {
    if (empty[j] !== empty[j - 1]) {
      current += digits[j];
    } else {
      if (current.length > result.length) {
        result = current;
      }
      current = digits[j];
    }
  }

  return result;
}


console.log(longestAlternatingSubstring("2105787220351146"));
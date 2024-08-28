var isValid = function(s) {
  const stack = [];
  const map = {
      '(': ')',
      '{': '}',
      '[': ']'
  };

  for (let i = 0; i < s.length; i++) {
      let char = s[i];
      if (map[char]) {
          stack.push(char);
      } else {
        let topElement = stack.pop();
        if (map[topElement] !== char) {
          return false;
      }
    }
  }
  return stack.length === 0;
}

console.log(isValid("()")); // Output: true

function validParentheses(parens) {

  let result = 0;

  for (let i = 0; i < parens.length; i++) {
    if (parens[i] === "(") {
      result++;
    } else {
      result--;
    }
    if (result < 0) {
      return false;
    }
  }

  return !result;

}

console.log(validParentheses("()"));
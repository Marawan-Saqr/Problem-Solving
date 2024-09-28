function solve(str) {

  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] != ' ') {
      result += str[i];
    }

    if (str[result.length] === ' ') {
      result += ' ';
    }
  }

  return result;
}

console.log(solve("our code"));
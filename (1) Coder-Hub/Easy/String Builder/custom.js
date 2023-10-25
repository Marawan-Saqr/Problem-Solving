function string_builder(expression) {
  const stack = [];
  let currentNum = 0;
  let currentStr = '';
  for (let char of expression) {
    if (!isNaN(char)) {
      currentNum = currentNum * 10 + parseInt(char);
    } else if (char === '[') {
      stack.push(currentStr);
      stack.push(currentNum);
      currentStr = '';
      currentNum = 0;
    } else if (char === ']') {
      const num = stack.pop();
      const prevStr = stack.pop();
      currentStr = prevStr + currentStr.repeat(num);
    } else {
      currentStr += char;
    }
  }
  return currentStr;
}



console.log(string_builder("3[a]2[bc]"));

function drawStairs(n) {
  let result = '';
  for (let i = 1; i <= n; i++) {
    let stairPattern = '';
    for (let j = 1; j < i; j++) {
      stairPattern += ' ';
    }
    stairPattern += 'I';
    result += stairPattern;
    if (i !== n) {
      result += '\n';
    }
  }

  return result;
}


console.log(drawStairs(3));










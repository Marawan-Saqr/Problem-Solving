function doubles(s) {

  let result = [];

  for (let i = 0; i < s.length; i++) {
    if (result[result.length - 1] === s[i]) {
      result.pop();
    } else {
      result.push(s[i]);
    }
  }

  return result.join('');
}

console.log(doubles('abbcccdddda'));
function testit(s) {

  let result = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      result = result.slice(0, -1) + s[i - 1].toUpperCase();
      result += " "; // Add the space
    } else if (i === s.length - 1) {
      result += s[i].toUpperCase();
    } else {
      result += s[i];
    }
  }
  return result;

}

console.log(testit("a a"));
function solve(s) {

  let vowels = ["a", "e", "i", "o", "u"];
  let counter = 0;
  let result = [];

  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      counter++;
      result.push(counter);
    } else if (!vowels.includes(s[i])) {
      counter = 0;
    }
  }

  return Math.max(...result);

}


console.log(solve("codewarriors"));
function repetitions(s) {

  let counter = 0;
  let counterArray = [];
  for (let i = 0; i < s.length; i++) {
    counter++;
    if (s[i] !== s[i + 1]) {
      counterArray.push(counter);
      counter = 0;
    }
  }

  let result = Math.max(...counterArray);
  return result;

}


console.log(repetitions("AAAABBBCCD"));
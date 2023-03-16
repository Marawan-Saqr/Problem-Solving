function word_repeat(word, n) {
  let result = word;
  for (let i = 1; i < n; i++) {
    result += " " + word;
  }
  return result;
}



console.log(word_repeat("Hi", 2));




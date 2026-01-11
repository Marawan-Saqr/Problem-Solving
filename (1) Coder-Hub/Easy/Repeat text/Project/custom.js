function word_repeat(word, n) {

  let result = "";
  for (let i = 0; i < n; i++) {
    result += " " + word;
  }
  
  return result.trim();

}

console.log(word_repeat("Developers", 2));
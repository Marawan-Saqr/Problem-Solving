function count_char(sentence, ch) {
  let counts = 0;
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === ch) {
      counts += 1;
    }
  }
  return counts;
}

console.log(count_char("day", "d"));


















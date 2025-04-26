function count_char(sentence, ch) {

  let counter = 0;
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === ch) {
      counter++;
    }
  }

  return counter;

}

console.log(count_char("day", "d"));
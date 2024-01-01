function str_len_comparison(words) {
  if (words.length < 2) return false;
  return words.every((word, _, self) => self[0].length == word.length);
}



console.log(str_len_comparison(['A', 'B', 'C', 'R']));









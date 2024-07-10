function str_len_comparison(words) {

  if (words.length === 0) {
    return words;
  } else if (words.length === 1) {
    return false;
  }

  for (let i = 0; i < words.length - 1; i++) {
    if (words[i].length !== words[i + 1].length) {
      return false;
    }
  }

  return true;

}

console.log(str_len_comparison(['123']));
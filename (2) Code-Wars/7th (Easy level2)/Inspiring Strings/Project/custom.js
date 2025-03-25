function longestWord(stringOfWords) {

  let splited = stringOfWords.split(" ");
  let sorted = splited.sort((a, b)=> a.length - b.length);
  return sorted[sorted.length - 1];

}


console.log(longestWord("red white blue"));
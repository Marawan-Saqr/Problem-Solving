function middle_char(word) {

  let lengthOfWord = word.length;
  let midChar = Math.floor(lengthOfWord / 2);

  if (lengthOfWord % 2 === 0) {
    return word[midChar - 1] + word[midChar];
  } else {
    return word[midChar];
  }

}

console.log(middle_char("Marawan"));
function wordValue(a) {
  let alphabetic = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26];
  let newResult = [];

  for (let i = 0; i < a.length; i++) {
    let word = a[i];
    let wordValue = 0;

    for (let j = 0; j < word.length; j++) {
      if (word[j] !== ' ') {
        let charValue = alphabetic[word.charCodeAt(j) - 'a'.charCodeAt(0)];
        wordValue += charValue;
      }
    }
    newResult.push(wordValue * (i + 1));
  }

  return newResult;
}

console.log(wordValue(["abc abc", "abc abc", "abc", "abc"]));

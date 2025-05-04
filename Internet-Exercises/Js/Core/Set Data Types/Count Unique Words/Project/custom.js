function countUniqueWords(strings) {

  let splited = strings.split(" ");

  let uniqueWords = new Set(splited);

  return uniqueWords.size;

}


console.log(countUniqueWords("hello world hello universe"));
function filterFiveLetterWords(words) {

  let result = words.filter((element) => {
    return element.length === 5;
  })

  return result;

}


console.log(filterFiveLetterWords(['apple', 'pear', 'grape', 'banana', 'kiwi']));
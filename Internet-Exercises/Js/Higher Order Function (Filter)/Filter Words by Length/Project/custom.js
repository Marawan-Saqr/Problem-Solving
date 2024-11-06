function wordLength(array) {
  let filterLength = array.filter(function(element) {
    return element.length > 4;
  });

  return filterLength;
}

console.log(wordLength(["apple", "banana", "pear", "kiwi"]));
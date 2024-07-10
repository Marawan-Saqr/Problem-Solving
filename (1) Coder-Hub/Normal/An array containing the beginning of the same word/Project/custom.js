function find_prefix(words, text) {

  let newArray = [];
  let capitalText = text.toLowerCase();

  for (let i = 0; i < words.length; i++) {
    let check = words[i].toLowerCase();
    if (check.startsWith(capitalText)) {
      newArray.push(words[i]);
    }
  }

  if (newArray.length === 0) {
    return ['No matches found'];
  } else {
    return newArray;
  }

}

console.log(find_prefix(['Save', 'Saudi', 'Satr', 'Send', 'Salt', 'Super', 'Sample'], 'Sa'));
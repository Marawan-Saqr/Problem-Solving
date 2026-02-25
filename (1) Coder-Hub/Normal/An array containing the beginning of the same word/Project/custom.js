function find_prefix(words, text) {

  let lowerText = text.toLowerCase();
  let result = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].toLowerCase().startsWith(lowerText)) {
      result.push(words[i]);
    }
  }

  if (result.length === 0) {
    return ['No matches found'];
  } else {
    return result;
  }

}

console.log(find_prefix(['Save', 'Saudi', 'Satr', 'Send', 'Salt', 'Super', 'Sample'], 'Sa'));
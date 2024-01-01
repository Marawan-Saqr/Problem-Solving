function find_prefix(words, text) {
  let matchingWords = [];
  const searchText = text.toLowerCase();

  for (let i = 0; i < words.length; i++) {
    const word = words[i].toLowerCase();
    if (word.startsWith(searchText)) {
      matchingWords.push(words[i]);
    }
  }

  if (matchingWords.length > 0) {
    return matchingWords;
  } else {
    return ["No matches found"];
  }
}



console.log(find_prefix(['Compared', 'Coding', 'Career', 'Coderhub', 'Cold', 'Call'], 'co'));
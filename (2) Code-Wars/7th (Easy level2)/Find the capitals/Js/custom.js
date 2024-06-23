var capitals = function(word) {

  let newArray = [];

  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) {
      newArray.push(word.indexOf(word[i]));
    }
  }

  return newArray;

}

console.log(capitals("CodEWaRs"));
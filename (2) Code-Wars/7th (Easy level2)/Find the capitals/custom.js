var capitals = function (word) {
	let emptyArray = [];
  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) {
      emptyArray.push(word.indexOf(word[i]));
    }
  }
  return emptyArray;
};


console.log(capitals("marOO"));



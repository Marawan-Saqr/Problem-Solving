const words = ['apple', 'banana', 'cherry', 'kiwi'];

let result = [];
for (let word of words) {
  if (word.length > 5) {
    result.push(word);
  }
}


console.log(result);
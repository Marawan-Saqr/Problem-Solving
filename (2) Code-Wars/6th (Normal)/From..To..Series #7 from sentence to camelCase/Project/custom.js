function toCamelCase(s, n) {

  const words = s.toLowerCase().split(" ");
  let result = "";


  // Case 1
  if (n === 1) {
    for (let i = 0; i < words.length; i++) {
      if (i === 0) {
        result += words[i];
      } else {
        result += words[i][0].toUpperCase() + words[i].slice(1);
      }
    }
    return result;
  }


  // Case 2
  if (n === 2) {
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      if (i !== words.length - 1) {
        result += word.slice(0, -1) + word.slice(-1).toUpperCase();
      } else {
        result += word;
      }
    }
    return result;
  }


  // Case 3
  if (n === 3) {
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      if (i !== 0) {
        word = word[0].toUpperCase() + word.slice(1);
      }
      if (i !== words.length - 1) {
        word = word.slice(0, -1) + word.slice(-1).toUpperCase();
      }
      result += word;
    }
    return result;
  }

}


// Test Cases
console.log(toCamelCase("hello world", 1)); // helloWorld
console.log(toCamelCase("hello world", 2)); // hellOworld
console.log(toCamelCase("hello world", 3)); // hellOWorld

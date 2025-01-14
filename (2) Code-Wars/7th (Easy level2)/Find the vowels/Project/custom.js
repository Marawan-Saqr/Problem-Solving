function vowelIndices(word){

  let vowels = ["a", "e", "i", "o", "u", "y"];
  let smallAll = word.toLowerCase();
  console.log(smallAll);
  let result = [];

  for (let i = 0; i < smallAll.length; i++) {
    if (vowels.includes(smallAll[i])) {
      result.push(i + 1);
    }
  }

  return result;

}





console.log(vowelIndices("yaiENuuRVOzSExRWjKgx"));
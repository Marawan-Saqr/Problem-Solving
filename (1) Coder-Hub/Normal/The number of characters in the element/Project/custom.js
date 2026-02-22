function word_length(arr) {

  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i].length);
  }

  return result;

}

console.log(word_length(['Code', 'hub']));
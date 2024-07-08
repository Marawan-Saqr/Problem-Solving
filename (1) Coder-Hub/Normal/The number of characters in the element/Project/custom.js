function word_length(arr) {

  let newResult = [];
  for (let i = 0; i < arr.length; i++) {
    newResult.push(arr[i].length);
  }

  return newResult;

}

console.log(word_length(['Code', 'hub']));
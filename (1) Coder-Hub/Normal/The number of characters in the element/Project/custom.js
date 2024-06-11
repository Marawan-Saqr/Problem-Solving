function word_length(arr) {

  let newArray = [];

  for (let i = 0; i < arr.length; i++) {
    newArray.push(arr[i].length);
  }

  return newArray;
}

console.log(word_length(['Code', 'hub']));
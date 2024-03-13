function digitize(n) {
  let stringWord = n.toString();
  let splited = stringWord.split("");
  let emptyArray = [];
  for (let i = splited.length - 1; i >= 0; i--) {
    emptyArray.push(parseInt(splited[i]));
  }
  return emptyArray;
}



console.log(digitize(35231)); // [1, 3, 2, 5, 3] reverse
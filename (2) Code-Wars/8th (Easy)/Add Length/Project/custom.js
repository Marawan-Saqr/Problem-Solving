function addLength(str) {

  let splited = str.split(" ");  // ['apple', 'ban']
  let result = [];
  for (let i = 0; i < splited.length; i++) {
    result.push(`${splited[i]} ${splited[i].length}`);
  }

  return result;

}

console.log(addLength("apple ban"));
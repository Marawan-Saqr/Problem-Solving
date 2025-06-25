function addLength(str) {

  let result = [];
  let splited = str.split(" ");

  for (let i = 0; i < splited.length; i++) {
    result.push(splited[i] + " " + splited[i].length)
  }

  return result;

}

console.log(addLength("apple ban"));
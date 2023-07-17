function addLength(str) {
  let splited = str.split(" ");
  let newArray = [];
  for (let i = 0; i < splited.length; i++) {
    newArray.push(splited[i] + " " + splited[i].length);
  }

  return newArray;
}




console.log(addLength("you will win"));
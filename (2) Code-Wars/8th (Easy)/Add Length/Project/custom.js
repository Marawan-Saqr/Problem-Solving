function addLength(str) {

  let newArray = [];
  let splitedStr = str.split(" ");  // ["apple", "ban"]

  for (let i = 0; i < splitedStr.length; i++) {
    newArray.push(`${splitedStr[i]} ${splitedStr[i].length}`);
  }

  return newArray;

}

console.log(addLength("apple ban"));
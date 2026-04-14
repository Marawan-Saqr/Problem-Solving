function abbrevName(name){

  let result = "";
  let splited = name.split(" ");

  for (let i = 0; i < splited.length; i++) {
    if (i === splited.length - 1) {
      result += splited[i][0].toUpperCase();
    } else {
      result += splited[i][0].toUpperCase();
      result += ".";
    }
  }

  return result;

}

console.log(abbrevName("Sam Harris"));
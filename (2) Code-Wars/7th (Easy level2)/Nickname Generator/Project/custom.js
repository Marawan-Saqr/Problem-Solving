function nicknameGenerator(name){

  if (name.length < 4) {
    return "Error: Name too short";
  }

  let vowelsArray = ["a", "A", "E", "e", "I", "i", "O", "o", "U", "u"];
  let result = "";

  if (vowelsArray.includes(name[2])) {
    result = `${name[0]}${name[1]}${name[2]}${name[3]}`;
  } else {
    result = `${name[0]}${name[1]}${name[2]}`;
  }


  return result;

}

console.log(nicknameGenerator("mar"));
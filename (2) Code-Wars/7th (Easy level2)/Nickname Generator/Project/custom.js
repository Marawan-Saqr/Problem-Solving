function nicknameGenerator(name){

  if (name.length <= 3) {
    return "Error: Name too short";
  }

  let vowelsChar = "aeiou";
  let checkVowel = name[2];

  let result = "";
  if (vowelsChar.includes(checkVowel)) {
    result += name.slice(0, 4)
  } else {
    result += name.slice(0, 3);
  }

  return result;

}


console.log(nicknameGenerator("Douglas"));
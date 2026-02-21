function nicknameGenerator(name) {

  if (name.length < 4) {
    return "Error: Name too short";
  }


  let vowelsCharacters = "aeiou";
  let result = "";
  for (let i = 0; i < name.length; i++) {
    if (i === 2 && vowelsCharacters.includes(name[i])) {
      result += name[i];
      result += name[i + 1];
    } else {
      result += name[i];
    }

    if (result.length === 3 || result.length === 4) {
      return result;
    }
  }

}


console.log(nicknameGenerator("Jeannie"));
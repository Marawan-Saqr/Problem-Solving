function nicknameGenerator(name) {

  let vowelCharacters = "aeiou";

  if (name.length === 0) {
    return "";
  }

  if (name.length <= 3) {
    return "Error: Name too short";
  }


  let result = "";
  for (let i = 0; i < name.length; i++) {
    if (i === 2 && vowelCharacters.includes(name[i])) {
      result += name[i];
      result += name[i + 1];
    } else {
      result += name[i];
    }

    if (result.length === 3 || result.length === 4) {
      return result;
    }

  }

  return result;

}


console.log(nicknameGenerator("Jeannie"));
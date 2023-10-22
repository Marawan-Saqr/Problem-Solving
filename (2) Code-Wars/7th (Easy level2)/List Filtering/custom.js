function nicknameGenerator(name){
  let vowels = ["e", "a", "i", "o", "u"];
  if (name.length > 3) {
    if (vowels.includes(name[2])) {
      return name.slice(0, 4);
    } else {
      return name.slice(0, 3);
    }
  } else {
    return "Error: Name too short";
  }
}




console.log(nicknameGenerator("Same"));













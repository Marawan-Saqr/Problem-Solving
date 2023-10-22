function disemvowel(str) {
  let vowelsArray = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let splited = str.split("");
  let result = "";
  for (let i = 0; i < splited.length; i++) {
    if (!vowelsArray.includes(splited[i])){
      result += splited[i];
    }
  }
  return result;
}


console.log(disemvowel("This website is for losers LOL!"));



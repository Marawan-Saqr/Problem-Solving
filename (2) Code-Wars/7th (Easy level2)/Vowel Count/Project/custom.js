function getCount(str) {

  let vowelsCharacters = ["a", "e", "i", "o", "u"];
  let vowelsOnly = str.split("").filter((element)=> {
    return vowelsCharacters.includes(element);
  });

  return vowelsOnly.length;

}

console.log(getCount("abracadabra"));
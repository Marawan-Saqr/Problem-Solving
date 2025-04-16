function getStrings(city){

  let smallChar = city.replace(/\s+/g, '').toLowerCase(); // lasvaegas

  let newObj = {};
  for (let i = 0; i < smallChar.length; i++) {
    if (newObj[smallChar[i]]) {
      newObj[smallChar[i]] += "*";
    } else {
      newObj[smallChar[i]] = "*";
    }
  }

  let result = "";
  for (let char in newObj) {
    result += `${char}:${newObj[char]},`;
  }

  return result.slice(0, -1);

}




console.log(getStrings("Chicago"));
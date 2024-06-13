function digitize(n) {

  let convertString = n.toString(); // "35231"
  let splitedString = convertString.split("");
  let reversedString = splitedString.reverse();
  
  let newArray = [];
  for (let i = 0; i < reversedString.length; i++) {
    newArray.push(parseInt(reversedString[i]));
  }

  return newArray;

}

console.log(digitize(35231));
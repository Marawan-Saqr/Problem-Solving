function binaryToString(binary) {

  if (binary === "") {
    return "";
  }


  let groups = [];
  let sum = "";
  for (let i = 0; i < binary.length; i++) {
    sum += binary[i];
    if (sum.length === 8) {
      groups.push(sum);
      sum = "";
    }
  }


  let numbersArray = [];
  for (let i = 0; i < groups.length; i++) {
    numbersArray.push(parseInt(groups[i], 2));
  }


  let charactersArray = numbersArray.map((element)=> {
    return  String.fromCharCode(element);
  })

  return charactersArray.join("");

}



console.log(binaryToString("01001011010101000100100001011000010000100101100101000101"));
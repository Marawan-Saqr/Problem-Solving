function reverseSlice(str) {

  let reverseStr = str.split("").reverse().join("");
  let result = [];


  for (let i = 0; i < reverseStr.length; i++) {
    result.push(reverseStr.slice(i));
  }

  return result;

}



console.log(reverseSlice("123"));
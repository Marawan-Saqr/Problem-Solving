function convertToUpperCase(str) {

  return str.toUpperCase();

}

function reverseString(str) {

  let result = convertToUpperCase(str);

  return result.split("").reverse().join("");

}


console.log(reverseString("hello world"));
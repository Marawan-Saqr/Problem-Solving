function reverseNumber(n) {

  let result = n.toString().split("").reverse().join("");


  let finalResult = parseInt(result);


  if (n.toString().includes("-")) {
    return -finalResult;
  } else {
    return finalResult;
  }

}

console.log(reverseNumber(123));
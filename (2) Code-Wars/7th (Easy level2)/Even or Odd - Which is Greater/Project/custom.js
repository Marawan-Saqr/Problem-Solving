function evenOrOdd(str) {

  let resultOdd = 0;
  let resultEven = 0;
  for (let i = 0; i < str.length; i++) {
    if (parseInt(str[i]) % 2 === 0) {
      resultEven += parseInt(str[i]);
    } else {
      resultOdd += parseInt(str[i]);
    }
  }


  if (resultEven > resultOdd) {
    return "Even is greater than Odd";
  } else if (resultEven < resultOdd) {
    return "Odd is greater than Even";
  } else {
    return "Even and Odd are the same";
  }

}


console.log(evenOrOdd("123"));
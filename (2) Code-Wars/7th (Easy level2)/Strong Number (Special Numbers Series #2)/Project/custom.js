function strong(n) {

  let stringed = n.toString();
  let minResult = 1;
  let result = 0;

  for (let i = 0; i < stringed.length; i++) {
    minResult = 1;
    for (let j = 1; j <= Number(stringed[i]); j++) {
      minResult *= j;
    }
    result += minResult;
  }


  if (result === n) {
    return "STRONG!!!!";
  } else {
    return "Not Strong !!";
  }

}


console.log(strong(145));
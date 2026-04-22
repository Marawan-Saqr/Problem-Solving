function fakeBin(x){

  let result = "";
  for (let i = 0; i < x.length; i++) {
    if (Number(x[i]) < 5) {
      result += "0";
    } else {
      result += "1";
    }
  }

  return result;

}

console.log(fakeBin("45385593107843568"));
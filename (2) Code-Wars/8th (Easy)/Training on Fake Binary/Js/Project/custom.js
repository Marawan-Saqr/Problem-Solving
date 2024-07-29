function fakeBin(x){

  let result = "";

  for (let i = 0; i < x.length; i++) {
    if (x[i] < "5") {
      result += "0";
    } else if (x[i] >= "5") {
      result += "1";
    }
  }

  return result;

}

console.log(fakeBin("45385593107843568"));
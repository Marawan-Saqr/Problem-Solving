function reverse_case(strParam) {
  let newResult = "";
  for (let i = 0; i < strParam.length; i++) {
    if (strParam[i] === strParam[i].toUpperCase()){
      newResult += strParam[i].toLowerCase();
    } else {
      newResult += strParam[i].toUpperCase();
    }
  }
  return newResult;
}


console.log(reverse_case("TeSt"));






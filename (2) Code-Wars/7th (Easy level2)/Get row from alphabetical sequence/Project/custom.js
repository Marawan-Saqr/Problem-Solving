function getRow(n) {

  let rowIndex = (n - 1) % 26 + 1;

  let alphabetic = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = "";


  for (let i = 0; i < alphabetic.length; i++) {
    if (alphabetic[i] === String.fromCharCode(rowIndex + 64)) {
      result += alphabetic[i].repeat(rowIndex);
    } else {
      result += alphabetic[i];
    }
  }

  return result.slice(rowIndex - 1);

}



console.log(getRow(27));
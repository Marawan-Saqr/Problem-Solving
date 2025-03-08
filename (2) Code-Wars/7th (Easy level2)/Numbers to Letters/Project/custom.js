function switcher(x) {

  let result = "";

  for (let i = 0; i < x.length; i++) {
    if (x[i] >= 1 && x[i] <= 26) {
      result += String.fromCharCode((97 + 26) - Number(x[i]));
    } else if (Number(x[i]) === 27) {
      result += "!";
    } else if (Number(x[i]) === 28) {
      result += "?"
    } else if (Number(x[i]) === 29) {
      result += " ";
    }
  }

  return result;

}


console.log(switcher(['25','7','8','4','14','23','8','25','23','29','16','16','4']));
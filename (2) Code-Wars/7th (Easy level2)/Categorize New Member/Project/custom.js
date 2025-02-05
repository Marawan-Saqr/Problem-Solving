function openOrSenior(data){

  let result = [];

  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].length; j+= 2) {
      if (data[i][j] >= 55 && data[i][j + 1] > 7) {
        result.push("Senior");
      } else {
        result.push("Open");
      }
    }
  }

  return result;

}



console.log(openOrSenior([[45, 12],[55, 21],[19, -2],[104, 20]]));
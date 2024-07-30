function digitize(n) {

  let convertToString = n.toString();
  let splited = convertToString.split("");
  splited.reverse();
  let newResult = [];

  for (let i = 0; i < splited.length; i++) {
    newResult.push(parseInt(splited[i]));
  }

  return newResult;

}

console.log(digitize(35231));
function revrot(str, sz) {

  if (sz <= 0 || str === "") {
    return "";
  } else if (sz > str.length) {
    return "";
  }


  let groups = [];
  let sum = "";
  for (let i = 0; i < str.length; i++) {
    sum += str[i];
    if (sum.length === sz) {
      groups.push(sum);
      sum = "";
    }
  }


  let result = "";
  for (let j = 0; j < groups.length; j++) {
    let chunk = groups[j];
    let sum = chunk.split('').reduce((acc, digit) => acc + Number(digit), 0);
    if (sum % 2 === 0) {
      result += chunk.split('').reverse().join('');
    } else {
      let rotated = chunk.slice(1) + chunk[0];
      result += rotated;
    }
  }

  return result;

}



console.log(revrot("12345698765432", 4));
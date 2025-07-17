function count(string) {

  if (string.length === 0) {
    return {};
  }


  let counterObject = {};
  for (let i = 0; i < string.length; i++) {
    if (counterObject[string[i]]) {
      counterObject[string[i]]++;
    } else {
      counterObject[string[i]] = 1;
    }
  }

  return counterObject;

}





console.log(count("aba"));
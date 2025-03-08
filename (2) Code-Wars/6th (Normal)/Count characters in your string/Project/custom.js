function count(string) {

  if (string.length === 0 || string === "") {
    return {};
  }

  let obj = {};


  for (let i = 0; i < string.length; i++) {   // aab
    let char = string[i];
    if (obj[char]) {
      obj[char]++;
    } else {
      obj[char] = 1;
    }
  }

  return obj;

}





console.log(count("aba"));
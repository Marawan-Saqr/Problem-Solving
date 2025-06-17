function isVow(a) {

  let vowels = ["a", "e", "i", "o", "u"];
  let result = [];


  for (let i = 0; i < a.length; i++) {
    let char = String.fromCharCode(a[i]);
    if (vowels.includes(char)) {
      result.push(char);
    } else {
      result.push(a[i]);
    }
  }

  return result;

}


console.log(isVow([100, 100, 116, 105, 117, 121]));
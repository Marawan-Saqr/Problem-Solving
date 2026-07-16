function capitalize(s){

  let evenResult = [];
  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
      evenResult.push(s[i].toUpperCase());
    } else {
      evenResult.push(s[i]);
    }
  }

  let oddResult = [];
  for (let i = 0; i < s.length; i++) {
    if (i % 2 !== 0) {
      oddResult.push(s[i].toUpperCase());
    } else {
      oddResult.push(s[i]);
    }
  }

  return [evenResult.join(""), oddResult.join("")];

}

console.log(capitalize("abcdef"));
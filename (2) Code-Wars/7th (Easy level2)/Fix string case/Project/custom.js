function solve(s){

  let upper = "";
  let lower = "";


  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i].toLowerCase() && s[i] !== s[i].toUpperCase()) {
      lower += s[i];
    } else if (s[i] === s[i].toUpperCase() && s[i] !== s[i].toLowerCase()) {
      upper += s[i];
    }
  }


  if (lower.length === upper.length) {
    return s.toLowerCase();
  } else if (lower.length < upper.length) {
    return s.toUpperCase();
  } else if (lower.length > upper.length) {
    return s.toLowerCase();
  }

}

console.log(solve("CODe"));
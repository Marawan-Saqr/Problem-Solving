function solve(a, b){

  if (a === b) {
    return true;
  }

  if (a.replace('*', '') === b) {
    return true;
  }

  let foundChar = "";
  let newWord = "";
  for (let i = 0; i < b.length; i++) {
    if (a[i] !== b[i]) {
      foundChar += b[i];
      newWord = a.replace("*", foundChar);
      if (newWord === b) {
        return true;
      }
    }
  }

  return false;

}


console.log(solve("codewar*s", "codewars"));
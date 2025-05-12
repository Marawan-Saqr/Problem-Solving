function solve(a, b){

  let result = "";
  for (let i = 0; i < a.length; i++) {
    if (!b.includes(a[i])) {
      result += a[i];
    }
  }


  for (let i = 0; i < b.length; i++) {
    if (!a.includes(b[i])) {
      result += b[i];
    }
  }


  return result;

}



console.log(solve("xxx", "xzca"));
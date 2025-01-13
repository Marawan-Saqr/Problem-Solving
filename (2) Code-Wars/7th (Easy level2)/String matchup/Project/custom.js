function solve(a, b){

  let counter = 0;
  let result = [];
  for (let i = 0; i < b.length; i++) {
    counter = 0;
    for (let j = 0; j < a.length; j++) {
      if (b[i] === a[j]) {
        counter++;
      }
    }
    result.push(counter);
  }

  return result;

}




console.log(solve(['abc', 'abc', 'xyz', 'cde', 'uvw'], ['abc', 'cde', 'uap']));
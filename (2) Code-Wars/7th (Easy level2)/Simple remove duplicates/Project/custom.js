function solve(arr) {

  let result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }

  return result.reverse();

}



console.log(solve([1,2,1,2,1,1,3]));
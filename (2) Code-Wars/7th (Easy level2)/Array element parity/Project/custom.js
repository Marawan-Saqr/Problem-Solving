function solve(arr){

  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr.includes(arr[i]) && (arr.includes(-arr[i]))) {
      continue;
    } else {
      result = arr[i];
    }
  }

  return result;

}



console.log(solve([1,-1,2,-2,3,3]));
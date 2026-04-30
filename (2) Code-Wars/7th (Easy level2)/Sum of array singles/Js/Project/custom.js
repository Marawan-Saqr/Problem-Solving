function repeats(arr){

  let NumbersThatShowOneTime = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
      NumbersThatShowOneTime.push(arr[i]);
    }
  }

  let result = NumbersThatShowOneTime.reduce((acc, current)=> {
    return acc + current;
  }, 0);

  return result;

}



console.log(repeats([4, 5, 7, 5, 4, 8]));
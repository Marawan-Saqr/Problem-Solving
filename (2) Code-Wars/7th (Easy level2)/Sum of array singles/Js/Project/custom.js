function repeats(arr){

  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
      result.push(arr[i]);
    }
  }

  let finalResult = result.reduce((acc, current)=> {
    return acc + current;
  })

  return finalResult;

}



console.log(repeats([4, 5, 7, 5, 4, 8]));
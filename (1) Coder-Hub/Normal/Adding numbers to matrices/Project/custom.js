function add_five(arr) {

  let newResult = [];
  for (let i = 0; i < arr.length; i++) {
    newResult.push(`${arr[i]}5`);
  }


  return newResult;

}

console.log(add_five(['code', 'c']));
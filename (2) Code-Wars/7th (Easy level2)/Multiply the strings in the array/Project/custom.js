function arrMultiply(arr){

  let result = 1;
  for (let i = 0; i < arr.length; i++) {
    result *= Number(arr[i]);
  }

  return result.toString();

}


console.log(arrMultiply(['3', '5']));
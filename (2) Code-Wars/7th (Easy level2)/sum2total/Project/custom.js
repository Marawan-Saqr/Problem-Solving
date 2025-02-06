function total(arr) {

  let result = arr;

  while(result.length > 1) {
    let tempResult = [];
    let index = 0;

    while(index < result.length - 1) {
      let sum = result[index] + result[index + 1];
      tempResult.push(sum);
      index++;
    }

    result = tempResult;
  }

  return Number(result.toString());


}




console.log(total([1, 2, 3, 4, 5]));
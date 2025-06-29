function total(arr) {

  let result = arr;
  while(result.length > 1) {
    let temp = [];
    for (let i = 0; i < result.length - 1; i++) {
      temp.push(result[i] + result[i + 1]);
    }
    result = temp;
  }

  return Number(result.join(""));

}




console.log(total([1, 2, 3, 4, 5]));
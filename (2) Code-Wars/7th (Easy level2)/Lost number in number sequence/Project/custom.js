function findDeletedNumber(arr, mixArr) {

  let sorted = mixArr.sort((a, b)=> a - b); // [1, 3, 4, 5]
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== sorted[i]) {
      result = arr[i];
      break;
    }
  }

  return result;

}


console.log(findDeletedNumber([1,2,3,4,5,6,7,8,9], [5,7,6,9,4,8,1,2,3]));
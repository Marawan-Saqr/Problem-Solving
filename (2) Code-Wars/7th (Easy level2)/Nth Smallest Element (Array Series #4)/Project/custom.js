function nthSmallest(arr, pos){

  let sorted = arr.sort((a, b)=> a - b);

  return sorted[pos - 1];

}




console.log(nthSmallest([15, 20, 7, 10, 4, 3], 3));
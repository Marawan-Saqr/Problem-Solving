function findSmallestInt(arr) {

  let smallest = Math.min(...arr);
  return smallest;

}

console.log(findSmallestInt([34, 15, 88, 2]));
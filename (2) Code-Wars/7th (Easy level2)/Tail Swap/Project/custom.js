function tailSwap(arr) {

  let [head1, tail1] = arr[0].split(':');
  let [head2, tail2] = arr[1].split(':');

  let swappedArr = [`${head1}:${tail2}`, `${head2}:${tail1}`];

  return swappedArr;

}


console.log(tailSwap(["abc:123", "def:456"]));
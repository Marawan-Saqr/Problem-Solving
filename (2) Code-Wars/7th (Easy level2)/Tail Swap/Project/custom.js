function tailSwap(arr) {

  let [head, tail] = arr[0].split(":");
  let [head2, tail2] = arr[1].split(":");

  let swapped = [`${head}:${tail2}`, `${head2}:${tail}`];
  return swapped;

}


console.log(tailSwap(["abc:123", "def:456"]));
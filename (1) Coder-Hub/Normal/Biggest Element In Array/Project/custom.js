function max_element(arr) {

  let maxElement = Math.max(...arr);
  return maxElement;

}

console.log(max_element([1, 2, 3, 4, 5, 1000]));
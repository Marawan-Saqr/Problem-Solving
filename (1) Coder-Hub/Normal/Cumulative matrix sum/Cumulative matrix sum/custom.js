function cumulative_sum(arr) {
  let result = [];
  result.push(arr[0], arr[0] + arr[1], arr[0] + arr[1] + arr[2]);
  return result;
}

console.log(cumulative_sum([2, 4, 8]));
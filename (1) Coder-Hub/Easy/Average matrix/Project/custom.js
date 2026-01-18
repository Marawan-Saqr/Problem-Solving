function get_mean(arr) {

  let total = arr.reduce((acc, current)=> {
    return acc + current;
  }, 0);

  return total / arr.length;

}

console.log(get_mean([4, 1]));
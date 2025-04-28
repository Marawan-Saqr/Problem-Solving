function get_mean(arr) {

  let result = arr.reduce((acc, current)=> {
    return acc + current;
  }, 0);

  return result / arr.length;

}

console.log(get_mean([4, 1]));
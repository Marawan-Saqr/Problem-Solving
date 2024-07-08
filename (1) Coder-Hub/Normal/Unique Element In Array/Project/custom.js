function unique(arr) {
  let result = arr.filter(function(element) {
    return arr.indexOf(element) === arr.lastIndexOf(element);
  });

  return result;
}

console.log(unique([2, 4, -2]));
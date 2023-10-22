function unique(arr) {
  return arr.filter((element) => arr.indexOf(element) === arr.lastIndexOf(element));
}

console.log(unique([2, 4, -2]));  





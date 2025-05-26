function isSortedAndHow(array) {

  const ascending = array.slice().sort((a, b) => a - b);
  const descending = array.slice().sort((a, b) => b - a);

  if (array.every((val, i)=> val === ascending[i])) {
    return "yes, ascending";
  } else if (array.every((val, i)=> val === descending[i])) {
    return "yes, descending";
  } else {
    return "no";
  }

}

console.log(isSortedAndHow([1, 2, 3]));
console.log(isSortedAndHow([3, 2, 1]));
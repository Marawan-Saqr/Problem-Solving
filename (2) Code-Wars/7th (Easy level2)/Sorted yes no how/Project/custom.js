function isSortedAndHow(array) {

  const ascending = [...array].sort((a, b) => a - b);
  const descending = [...array].sort((a, b) => b - a);


  if (array.join(",") === ascending.join(",")) {
    return "yes, ascending";
  } else if (array.join(",") === descending.join(",")) {
    return "yes, descending";
  } else {
    return "no";
  }

}


console.log(isSortedAndHow([1, 2, 3]));
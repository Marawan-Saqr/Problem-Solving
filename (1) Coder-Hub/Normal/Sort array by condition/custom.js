function sort_array(my_array, typeParam) {

  if (typeParam === "B") {
    let sorted = my_array.sort((a, b) => b - a);
    return sorted;
  } else if (typeParam === "S") {
    let sorted = my_array.sort((a, b) => a - b);
    return sorted;
  }

}

console.log(sort_array([63, 12, 43, 56, 12], "B"));
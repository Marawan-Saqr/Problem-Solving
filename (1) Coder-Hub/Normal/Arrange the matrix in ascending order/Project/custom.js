function sort_array(elements_array) {

  let sorted = elements_array.sort((a, b) => a - b);

  return sorted;


}


console.log(sort_array([63, 12, 43, 56, 12]));
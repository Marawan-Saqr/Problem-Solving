function find_element(elements_array, element) {

  if (elements_array.includes(element)) {
    return true;
  } else {
    return false;
  }

}

console.log(find_element([2, 12, 34, 2, 3, 4, 5], 4));
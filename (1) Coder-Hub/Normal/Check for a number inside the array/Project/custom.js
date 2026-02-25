function find_element(elements_array, element) {

  return elements_array.includes(element) ? true : false;

}

console.log(find_element([2, 12, 34, 2, 3, 4, 5], 4));
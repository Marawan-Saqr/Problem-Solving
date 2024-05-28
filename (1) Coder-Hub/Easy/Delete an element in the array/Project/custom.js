function delete_element_in_array(arr, index) {

  arr.splice(index, 1);
  return arr;

}

console.log(delete_element_in_array([3, 2, 4, 88], 2));
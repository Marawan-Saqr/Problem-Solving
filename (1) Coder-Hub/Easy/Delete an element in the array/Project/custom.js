function delete_element_in_array(arr, index) {

  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === index) {
      continue;
    } else {
      result.push(arr[i]);
    }
  }

  return result;

}

console.log(delete_element_in_array([3, 2, 4, 88], 2));
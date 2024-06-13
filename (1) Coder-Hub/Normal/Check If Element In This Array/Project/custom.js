function find_element(elements_array, element) {

  if (elements_array.includes(element)) {
    return true;
  } else {
    return false;
  }

}


console.log(find_element([2, 12, 34, 2, 3, 4, 5], 4));

////////////////////////////////////////////////////////////////////////////////////

// Another Solution

function find_element(elements_array, element) {

  for (let i = 0; i < elements_array.length; i++) {
    if (elements_array[i] === element) {
      return true;
    }
  }

  return false;

}


console.log(find_element([2, 12, 34, 2, 3, 4, 5], 4));
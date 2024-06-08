function cumulative_addition(elements_array) {
  let sum = 0;
  for (let i = 0; i < elements_array.length; i++) {
    sum += elements_array[i];
  }

  let newArray = [sum, elements_array.length];
  return newArray;
}



console.log(cumulative_addition([5, 1, 2, 4, 9, 10, 200]));
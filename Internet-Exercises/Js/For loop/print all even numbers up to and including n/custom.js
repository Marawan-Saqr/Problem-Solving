function reverseArrays(Array) {
  let result = " ";
  for (let i = Array.length - 1; i >= 0; i--) {
    result += Array[i] + " ";
  }
  return result;
}




console.log(reverseArrays([43, "what", 9, true, "cannot", false, "be", 3, true]));

function findGlasses(arr) {

  for (let i = 0; i < arr.length; i++) {
    if (/O-+O/.test(arr[i])) {
      return i;
    }
  }
  return -1;

}


console.log(findGlasses(["phone", "O-O", "coins", "keys"])); // Outputs: 1
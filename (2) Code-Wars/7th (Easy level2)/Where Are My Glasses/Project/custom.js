function findGlasses(arr) {

  for (let i = 0; i < arr.length; i++) {
    if (/O-+O/.test(arr[i])) {
      return i;
    }
  }
  return -1;

}

// Test cases
console.log(findGlasses(["phone", "O-O", "coins", "keys"])); // Outputs: 1
console.log(findGlasses(["OO", "wallet", "O##O", "O----O"])); // Outputs: 3
console.log(findGlasses(["O--#--O", "dustO---Odust", "more dust"])); // Outputs: 1
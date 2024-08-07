function sameCase(a, b) {

  if (typeof a !== "string" || typeof b !== "string") {
    return -1;
  }

  const lettersRegex = /^[a-zA-Z]+$/;

  // Check if both strings contain only letters
  if (!lettersRegex.test(a) || !lettersRegex.test(b)) {
    return -1;
  }

  if (a === a.toUpperCase() && b === b.toUpperCase()) {
    return 1;
  } else if (a === a.toLowerCase() && b === b.toLowerCase()) {
    return 1;
  } else {
    return 0;
  }

}

console.log(sameCase('H', ':'));
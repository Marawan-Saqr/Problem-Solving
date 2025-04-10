function lowercaseCount(str) {

  if (str.length === 0 || str === "" || str === " ") {
    return 0;
  }

  const lowercaseLetters = str.match(/[a-z]/g);
  
  if (lowercaseLetters) {
    return lowercaseLetters.join("").length;
  } else {
    return 0;
  }

}


console.log(lowercaseCount("ABC123"));
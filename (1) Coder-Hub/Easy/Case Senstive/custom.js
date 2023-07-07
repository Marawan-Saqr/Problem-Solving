
function allSameCase(word) {
  let hasUppercase = false;
  let hasLowercase = false;

  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) {
      hasUppercase = true;
    } else if (word[i] === word[i].toLowerCase()) {
      hasLowercase = true;
    }
    
    if (hasUppercase && hasLowercase) {
      return false;
    }
  }

  return true;
}


console.log(allSameCase("hellO"));


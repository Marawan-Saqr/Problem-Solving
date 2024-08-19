function validSpacing(s) {

  for (let i = 0; i < s.length; i++) {
    if (s[i] === " " && s[i + 1] === " ") {
      return false;
    }
  }

  if (s[0] === ' ') {
    return false;
  } else if (s[s.length - 1] === " ") {
    return false;
  } else {
    return true;
  }

}

console.log(validSpacing("hello world"));
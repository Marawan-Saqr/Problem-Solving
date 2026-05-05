function secondSymbol(s, symbol) {

  let firstTime = false;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === symbol) {
      if (firstTime === false) {
        firstTime = !firstTime;
      } else {
        return i;
      }
    }
  }

  return -1;

}



console.log(secondSymbol("tgKPLFuFdvtZGMlbDwdeOSGsfyTPjxXQjZTYbjFbHIelqy", "T"));
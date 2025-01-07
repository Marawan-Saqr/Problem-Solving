function secondSymbol(s, symbol) {

  let counter = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === symbol) {
      counter++;
      if (counter > 1) {
        return i;
      }
    }
  }
  return -1;
}



console.log(secondSymbol("Hello world!!!", "h"));
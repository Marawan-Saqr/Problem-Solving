function secondSymbol(s, symbol) {

  let firstFind = s.indexOf(symbol);
  let secondFind = s.indexOf(symbol, firstFind + 1);

  if (s.includes(symbol)) {
    if (s.indexOf(symbol) === firstFind) {
      return secondFind;
    }
  }

  return -1;

}

console.log(secondSymbol("Hello world!!!", "l"));
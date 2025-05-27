function printerError(s) {

  let correctedLetters = "abcdefghijklm";
  let errorsLog = 0;
  for (let i = 0; i < s.length; i++) {
    if (!correctedLetters.includes(s[i])) {
      errorsLog++;
    }
  }

  return `${errorsLog}/${s.length}`;

}



console.log(printerError("aaaxbbbbyyhwawiwjjjwwm"));
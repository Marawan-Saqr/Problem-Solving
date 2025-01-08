function printerError(s) {

  let errors = 0;

  for (let i = 0; i < s.length; i++) {
    if (!(s[i] >= 'a' && s[i] <= 'm')) {
      errors++;
    }
  }


  return `${errors}/${s.length}`;

}



console.log(printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"));
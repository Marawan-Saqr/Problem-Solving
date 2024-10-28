function getRow(n) {

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const row = (n - 1) % 26 + 1;


  if (row === 1) {
    return alphabet
  } else if (row === 26) {
    return 'Z'.repeat(26)
  }

  const repeatedChar = alphabet[row - 1];
  return repeatedChar.repeat(row) + alphabet.slice(row);

}

console.log(getRow(3));
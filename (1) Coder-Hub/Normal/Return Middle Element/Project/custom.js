function middle_char(word) {
  let len = word.length;
  let mid = Math.floor(len / 2);

  if (len % 2 !== 0) {
    return word[mid];
  } else {
    return word[mid - 1] + word[mid];
  }
}

console.log(middle_char("salem"));
console.log(middle_char("Yassmina"));
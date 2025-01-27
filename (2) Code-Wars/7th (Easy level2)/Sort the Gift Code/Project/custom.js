function sortGiftCode(code) {

  let sorted = code.split("").sort();
  return sorted.join("");

}

console.log(sortGiftCode("abcdef"));
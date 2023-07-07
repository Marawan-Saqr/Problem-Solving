function numbers_range(number) {
  let result = "";
  let mod = result.toString();
  for (let i = 0; i <= number; i++) {
    mod += " " + i;
  }
  return mod.trim();
}

console.log(numbers_range(7));



























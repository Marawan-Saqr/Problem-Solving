function canForm(source, target) {
  source = source.toLowerCase();
  target = target.toLowerCase();

  let charCount = new Map();
  for (let char of source) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  for (let char of target) {
    if (!charCount.has(char) || charCount.get(char) === 0) {
      return "no";
    }
    charCount.set(char, charCount.get(char) - 1);
  }

  return "yes";
}

console.log(canForm("programmer", "programming")); // Output: no
console.log(canForm("HelloWorld", "held")); // Output: yes

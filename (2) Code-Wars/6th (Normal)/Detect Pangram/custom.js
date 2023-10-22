function isPangram(string) {
  let alphabetSet = new Set("abcdefghijklmnopqrstuvwxyz");

  // Convert input string to lowercase and remove non-alphabetic characters
  let cleanedString = string.toLowerCase().replace(/[^a-z]/g, '');

  let lettersSet = new Set(cleanedString);

  return lettersSet.size === 26;
}

console.log(isPangram("the quick brown fox jumps over the lazy dog."));
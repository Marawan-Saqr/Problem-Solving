String.prototype.toJadenCase = function () {
  // Split the string into individual words
  const words = this.split(' ');

  // Capitalize each word
  const capitalizedWords = words.map(word => {
    // Check if the word is a contraction (e.g., "don't" or "can't")
    // If it is, keep it lowercase to preserve the contraction
    if (/^(?:n't|'t|'ll|'ve|'re|'s|'m|'d)$/i.test(word)) {
      return word.toLowerCase();
    }

    // Capitalize the first letter of the word and make the rest lowercase
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });

  // Join the capitalized words back into a single string
  return capitalizedWords.join(' ');
};

// Example usage:
const quote = "how can mirrors be real if our eyes aren't real";
const jadenCaseQuote = quote.toJadenCase();

























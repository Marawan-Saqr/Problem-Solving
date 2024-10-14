var removeVowels = function(str) {

  let vowelsArray = ["a", "e", "i", "o", "u"];

  let result = str.split("").map(function(element) {
    return vowelsArray.includes(element) ? "" : element;
  });

  return result.join("");
}

console.log(removeVowels("drake"));

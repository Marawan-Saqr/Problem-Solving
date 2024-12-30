function tiyFizzBuzz(sentence){

  let alphabetic = "aeiouAEIOU";
  let result = "";
  for (let i = 0; i < sentence.length; i++) { 
    if (!/[A-Za-z]/.test(sentence[i])) {
      result += sentence[i];
    } else if (sentence[i] === " ") {
      result += " ";
    } else if (sentence[i] === sentence[i].toUpperCase() && !alphabetic.includes(sentence[i])) {
      result += "Iron";
    } else if (sentence[i] === sentence[i].toLowerCase() && alphabetic.includes(sentence[i])) {
      result += "Yard";
    } else if (sentence[i] === sentence[i].toUpperCase() && alphabetic.includes(sentence[i])) {
      result += "Iron Yard";
    } else if (sentence[i] === sentence[i].toLowerCase() || !alphabetic.includes(sentence[i])) {
      result += sentence[i];
    }
  }

  return result;

}



console.log(tiyFizzBuzz("Hello WORLD!"));
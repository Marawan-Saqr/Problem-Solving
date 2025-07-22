const vowels = {
  a: 1,
  e: 2,
  i: 3,
  o: 4,
  u: 5
}




// Encode Function
function encode(string) {
  let result = "";
  for (let i = 0; i < string.length; i++) {
    if (vowels.hasOwnProperty(string[i])) {
      result += vowels[string[i]];
    } else {
      result += string[i];
    }
  }
  return result;
}




// Decode Function
function decode(string) {
  let result = "";
  for (let i = 0; i < string.length; i++) {
    let decodedChar = Object.keys(vowels).find(key => vowels[key] == string[i]);
    result += decodedChar || string[i];
  }
  return result;
}




console.log(encode("hello"));
console.log(decode("h2ll4"));
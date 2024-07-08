// function disemvowel(str) {

//   let result = "";
//   let vowelsArray = ["A", "a", "E", "e", "I", "i", "O", "o", "U", "u"];

//   for (let i = 0; i < str.length; i++) {
//     if (vowelsArray.includes(str[i])) {
//       continue;
//     } else {
//       result += str[i];
//     }
//   }

//   return result;

// }

// console.log(disemvowel("This website is for losers LOL!"));

///////////////////Another Solution///////////////////////////////////


function disemvowel(str) {

  let vowelsArray = ["A", "a", "E", "e", "I", "i", "O", "o", "U", "u"];
  let finalResult = str.split("").filter(function(element) {
    if (!vowelsArray.includes(element)) {
      return element;
    }
  })

  return finalResult.join("");

}

console.log(disemvowel("This website is for losers LOL!"));
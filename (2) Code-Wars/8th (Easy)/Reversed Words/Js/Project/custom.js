function reverseWords(str){

  let strReversed = str.split(" ").reverse().join(" ");
  return strReversed;

}


console.log(reverseWords("Hello World!"));
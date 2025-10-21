function reverse_words(str1, str2) {

  let collectWords = str1 + " " + str2;
  let splited = collectWords.split(" ").reverse().join(", ");
  return splited;y

}



console.log(reverse_words("test", "one"));
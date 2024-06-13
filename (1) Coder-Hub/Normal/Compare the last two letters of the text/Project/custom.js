function compare_two_words(s1, s2) {

  let firstString = s1[s1.length - 2] + s1[s1.length - 1];
  let secondString = s2[s2.length - 2] + s2[s2.length - 1];

  return firstString === secondString;

}


console.log(compare_two_words("plant", "planet"));
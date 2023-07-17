function tripleTrouble(one, two, three){
  let word = "";
  for (let i = 0; i < one.length; i++) {
    word += one[i] + two[i] + three[i];
  }

  return word;
}


console.log(tripleTrouble("aa", "bb", "cc"));  // abcabc













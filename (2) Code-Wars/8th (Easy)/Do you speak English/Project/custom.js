function spEng(sentence){
  let word = sentence.toLowerCase();
  if (word.includes("english")) {
    return true;
  } else {
    return false;
  }
}

console.log(spEng("english"));
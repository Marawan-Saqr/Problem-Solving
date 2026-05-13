function spEng(sentence){
  let smallCase = sentence.toLowerCase();
  return smallCase.includes("english") ? true : false;
}

console.log(spEng("english"));
function getCount(words) {

  let obj = {
    vowels: 0,
    consonants: 0
  }

  if (!words || typeof words !== "string") {
    return obj;
  }

  let noSpaces = words.replace(/[^a-zA-Z]/g, '');
  console.log(noSpaces);
  let vowels = "aeiouAEIOU";
  

  for (let i = 0; i < noSpaces.length; i++) {
    if (vowels.includes(noSpaces[i])) {
      obj.vowels++;
    } else {
      obj.consonants++;
    }
  }

  return obj;

}


console.log(getCount("Here is some text"));
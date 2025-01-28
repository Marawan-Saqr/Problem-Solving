const orderedCount = function(text) {

  let result = [];
  let counter = 0;

  for (let i = 0; i < text.length; i++) {
    counter = 0;
    for (let j = 0; j < text.length; j++) {
      if (text[i] === text[j]) {
        counter++;
      }
    }
    if (!result.flat().includes(text[i])) {
      result.push([text[i], counter]);
    }
  }

  return result;

}




console.log(orderedCount("abracadabra"));
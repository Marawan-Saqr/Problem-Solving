function wave(str){

  if (str.length === 0 || str === " ") {
    return [];
  }

  let allSmall = str.toLowerCase();

  let result = [];
  for (let i = 0; i < allSmall.length; i++) {
    if (allSmall[i] === " ") {
      continue;
    } else {
      result.push(allSmall.slice(0, i) + allSmall[i].toUpperCase() + allSmall.slice(i + 1));
    }
  }


  return result;

}



console.log(wave("two words"));
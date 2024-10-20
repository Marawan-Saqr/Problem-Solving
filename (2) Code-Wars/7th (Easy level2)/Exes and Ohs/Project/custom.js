function XO(str) {

  let smallCases = str.toLowerCase();
  let containerX = 0;
  let containerO = 0;


  for (let i = 0; i < smallCases.length; i++) {
    if (smallCases[i] === "x") {
      containerX++;
    } else if (smallCases[i] === "o") {
      containerO++;
    }
  }


  if (containerX === containerO) {
    return true;
  } else {
    return false;
  }

}



console.log(XO(""));
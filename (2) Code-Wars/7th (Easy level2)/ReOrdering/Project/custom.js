function reOrdering(text){

  let splited = text.split(" ");
  let resultOne = [];
  let resultTwo = [];

  for (let i = 0; i < splited.length; i++) {
    if (splited[i][0] === splited[i][0].toUpperCase()) {
      resultOne.push(splited[i]);
    } else {
      resultTwo.push(splited[i]);
    }
  }

  if (resultTwo.length === 0) {
    return resultOne.join(" ");
  } else {
    return resultOne.join(" ") + " " + resultTwo.join(" ");
  }


}




console.log(reOrdering("JoJo"));
const scores = {
  Ali: 45,
  Mona: 80,
  Sami: 60,
  Nada: 30
};


Object.keys(scores).forEach((element)=> {
  if (scores[element] > 50) {
    console.log(`Greater Scores Are ${element} => ${scores[element]}`);
  }
})
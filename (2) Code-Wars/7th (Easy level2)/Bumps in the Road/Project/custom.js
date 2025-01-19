function bump(x){

  let counterPump = 0;

  for (let i = 0; i < x.length; i++) {
    if (x[i] === "n") {
      counterPump++;
    }
  }


  if (counterPump <= 15) {
    return "Woohoo!";
  } else {
    return "Car Dead";
  }

}



console.log(bump("nnn_n__n_n___nnnnn___n__nnn__"));
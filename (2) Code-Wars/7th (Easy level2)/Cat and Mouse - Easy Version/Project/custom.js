function catMouse(x){

  let dots = "";
  for (let i = 0; i < x.length; i++) {
    if (x[i] === ".") {
      dots += x[i];
    }
  }

  return dots.length <= 3 ? "Caught!" : "Escaped!";


}


console.log(catMouse("C..m"));
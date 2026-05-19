function crap(x, bags, cap){

  let result = [];

  for (let i = 0; i < x.length; i++) {
    for (let j = 0; j < x[i].length; j++) {
      if (x[i][j] === "@") {
        result.push(x[i][j]);
      } else if (x[i][j] === "D") {
        return "Dog!!";
      }
    }
  }

  if (result.length <= bags * cap) {
    return "Clean";
  } else {
    return "Cr@p";
  }

}

console.log(crap([['_','_'], ['_','@'], ['D','_']], 2, 2));
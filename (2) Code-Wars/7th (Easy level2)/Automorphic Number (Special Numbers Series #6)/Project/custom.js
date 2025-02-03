function automorphic(n){

  let powered = Math.pow(n, 2);

  if (powered.toString().endsWith(n.toString())) {
    return "Automorphic";
  } else {
    return "Not!!";
  }

}



console.log(automorphic(25));
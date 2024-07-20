function threePowers(n) {
  return n > 2 && n.toString(2).match(/1/g).length <= 3;
}


console.log(threePowers(2));   // False
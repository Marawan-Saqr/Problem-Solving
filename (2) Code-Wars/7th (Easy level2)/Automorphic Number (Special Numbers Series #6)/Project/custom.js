function automorphic(n) {

  let squared = Math.pow(n, 2);
  let stringed = squared.toString();   // "625"

  if (stringed.endsWith(n)) {
    return "Automorphic";
  } else {
    return "Not!!";
  }

}



console.log(automorphic(25));
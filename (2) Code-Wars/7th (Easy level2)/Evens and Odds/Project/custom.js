function evensAndOdds(num){

  if (num % 2 === 0) {
    return num.toString(2);
  } else {
    return num.toString(16);
  }

}


console.log(evensAndOdds(8172381723));
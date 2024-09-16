function rainAmount(rainAmount) {
  if (rainAmount < 40) {
    return "You need to give your plant " + (40 - rainAmount) + "mm of water";
  } else {
    return "Your plant has had more than enough water for today!";
  }
}

console.log(rainAmount(40));
function rentalCarCost(d) {
  let cost = d * 40;
  if (d < 3) {
    return cost;
  }
  else if (d >= 7) {
    return cost - 50;
  }
  else if (d >= 3) {
    return cost - 20;
  }
}

console.log(rentalCarCost(3));
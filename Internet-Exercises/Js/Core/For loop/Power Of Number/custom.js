function numPower(power) {
  for (let i = 0; i < power.length; i++) {
    power[i] = Math.pow(power[i], 2);
  }
  return power;
}


console.log(numPower([2, 5, 7, 3]));




















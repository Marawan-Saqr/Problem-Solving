function temperature(Celsius) {
  if (Celsius < 0) {
    return "Oh It's Freezing!";
  } else {
    return "It's not freezing";
  }
}

console.log(temperature(5));
console.log(temperature(-5));
console.log(temperature(20));

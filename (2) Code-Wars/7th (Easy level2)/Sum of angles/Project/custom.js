function angle(n) {
  if (n <= 2) {
      return "A polygon must have more than 2 sides.";
  }
  return (n - 2) * 180;
}

console.log(angle(3));
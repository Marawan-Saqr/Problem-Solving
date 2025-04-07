function generateShape(integer) {
  return ("+".repeat(integer) + "\n").repeat(integer).trim();
}

console.log(generateShape(3));

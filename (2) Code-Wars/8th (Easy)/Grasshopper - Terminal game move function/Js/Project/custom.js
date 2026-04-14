function move (position, roll) {
  return position + (roll * 2);
}
console.log(move(3, 6));
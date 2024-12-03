function interlockable(a, b) {
  return !(a & b);
}


console.log(interlockable(0, 0));
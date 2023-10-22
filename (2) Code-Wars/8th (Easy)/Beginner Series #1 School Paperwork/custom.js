function paperwork(n, m) {
  if (n > 0 && m > 0) {
    return n * m;
  } else if (n <= 0 || m <= 0) {
    return 0;
  }
}


console.log(paperwork(5,0));

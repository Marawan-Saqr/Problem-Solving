function add(a, b) {

  while (b !== 0) {
    let carry = a & b;
    a = a ^ b;
    b = carry << 1;
  }
  return a;

}



console.log(add(1, 2));
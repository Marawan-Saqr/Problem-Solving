function sumOfIntegersInString(s) {

  return (s.match(/\d+/g) || []).reduce((s, n) => s + +n, 0);

}

console.log(sumOfIntegersInString("The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog"));
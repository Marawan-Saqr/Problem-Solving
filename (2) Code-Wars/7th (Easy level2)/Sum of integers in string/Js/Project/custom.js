function sumOfIntegersInString(s) {

  let numbers = s.match(/\d+/g);
  let result = 0;

  if (numbers) {
    numbers.map(function(e) {
      result += parseInt(e);
    });
  }

  return result;
}

console.log(sumOfIntegersInString("The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog"));

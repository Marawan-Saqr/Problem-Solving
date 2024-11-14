function bin_to_oct(b) {

  let convertToNDecimal = parseInt(b, 2);
  
  let octal = convertToNDecimal.toString(8);

  return Number(octal);


}


console.log(bin_to_oct("101010101010"));
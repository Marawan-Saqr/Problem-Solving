function calculate_total(subtotal, tax, tip) {

  let result = (subtotal + (subtotal * tax / 100) + (subtotal * tip / 100)).toFixed(2);

  return parseFloat(result);


}




console.log(calculate_total(36.97, 7, 15));
function mango(quantity, price){
  return price * (quantity - Math.floor(quantity / 3));
}


console.log(mango(2, 3));
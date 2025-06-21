const prices = [150, 80, 120, 300];

let result = prices.some((price)=> {
  return price <= 100;
})

console.log(result);
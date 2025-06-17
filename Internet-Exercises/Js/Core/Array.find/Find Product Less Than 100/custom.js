const products = [
  { name: "Mouse", price: 150 },
  { name: "Keyboard", price: 99 },
  { name: "Monitor", price: 300 }
];


let result = products.find((element)=> {
  return element.price < 100;
})

console.log(result);
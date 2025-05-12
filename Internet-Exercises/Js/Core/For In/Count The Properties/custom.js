let car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2022,
  color: "White"
};


let counterOfProperties = 0;
for (let key in car) {
  counterOfProperties++;
}

console.log(counterOfProperties);
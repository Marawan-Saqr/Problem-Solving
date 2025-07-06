const car = {
  brand: "Tesla",
  model: "Model 3",
  year: 2021,
  color: "white"
};


const {brand, model, owner = "Unknown"} = car;

console.log(brand);
console.log(model);
console.log(owner);
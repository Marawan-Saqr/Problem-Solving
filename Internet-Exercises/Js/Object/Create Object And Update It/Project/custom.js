const car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
  color: "blue"
};

console.log(car.make);   // "Toyota"
console.log(car.model);  // "Camry"
console.log(car.year);   // 2020
console.log(car.color);  // "blue"

// Add New Proberty
car.mileage = 15000;
console.log(car);

// Update Proberty
car.color = "red";
console.log(car.color);  // "red"

// Delete Proberty
delete car.year;
console.log(car);
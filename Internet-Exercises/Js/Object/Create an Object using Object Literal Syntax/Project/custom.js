let car = {
  brand: "BMW",
  model: "M3",
  year: 2010,
  getDetails: function() {
    return `${this.brand} ${this.model} ${this.year}`;
  }
}

console.log(car);
console.log(car.brand);
console.log(car.model);
console.log(car.year);
console.log(car.getDetails());
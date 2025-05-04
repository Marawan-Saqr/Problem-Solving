let car = {
  brand: "BMW",
  model: "2000Gtr",
  year: 1996,
  color: "red",
  start: function () {
    return `The ${car.brand} ${car.model} is starting`;
  },
};


console.log(car.start());



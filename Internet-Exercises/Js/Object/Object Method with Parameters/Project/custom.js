const car = {
  make: "BMW 2021",
  model: "M5",
  year: "",
  getDescription: function(includeYear) {
    if (includeYear) {
      let newYear = this.year = includeYear;
      return `This Is ${this.make} And It's Model Is ${this.model} And It's Year Is ${newYear}`;
    } else {
      return `This Is ${this.make} And It's Model Is ${this.model}`;
    }
  }
}

console.log(car.getDescription(4000));
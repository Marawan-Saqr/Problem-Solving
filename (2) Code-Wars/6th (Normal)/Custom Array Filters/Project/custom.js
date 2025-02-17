Array.prototype.even = function () {
  return this.filter(element => Number.isInteger(element) && element % 2 === 0);
};

Array.prototype.odd = function () {
  return this.filter(element => Number.isInteger(element) && element % 2 !== 0);
};

Array.prototype.under = function (limit) {
  return this.filter(element => Number.isInteger(element) && element < limit);
};

Array.prototype.over = function (limit) {
  return this.filter(element => Number.isInteger(element) && element > limit);
};

Array.prototype.inRange = function (start, end) {
  return this.filter(element => Number.isInteger(element) && element >= start && element <= end);
};


console.log([1, 2, 3, 4, 5].even());
console.log([1, 2, 3, 4, 5].odd());
console.log([1, 2, 3, 4, 5].under(4));
console.log([1, 2, 3, 4, 5].over(4));
console.log([1, 2, 3, 4, 5].inRange(1, 3));
console.log([1, 2, 18, 19, 20, 21, 22, 30, 40, 50, 100].even().inRange(18, 30));
console.log(["a", 1, "b", 300, "x", "q", 63, 122, 181, "z", 0.83, 0.11].even());
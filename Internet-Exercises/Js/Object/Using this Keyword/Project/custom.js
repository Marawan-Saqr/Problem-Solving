let counter = {
  count: 0,
  increment: function() {
    return ++this.count;
  }
}

console.log(counter.count); // Output: 0
console.log(counter.increment()); // Output: 1
console.log(counter.increment()); // Output: 2
console.log(counter.increment()); // Output: 3
console.log(counter.increment()); // Output: 4
console.log(counter.increment()); // Output: 5
console.log(counter.increment()); // Output: 6
console.log(counter.increment()); // Output: 7
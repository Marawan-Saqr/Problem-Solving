String.prototype.isUpperCase = function() {
  for (let i = 0; i < this.length; i++) {
    if (this[i].toLowerCase() !== this[i].toUpperCase() && this[i] === this[i].toLowerCase()) {
      return false;
    }
  }
  return true;
}

console.log("HELLO I AM DONALD".isUpperCase()); // Should print: true
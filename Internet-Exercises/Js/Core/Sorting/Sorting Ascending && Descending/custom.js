const numbers = [25, 100, 5, 42, 8];

let ascendingClone = [...numbers].sort((a, b) => a - b);
let descendingClone = [...numbers].sort((a, b) => b - a);

console.log("Ascending:", ascendingClone);
console.log("Descending:", descendingClone);
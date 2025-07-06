const data = [
  { id: 1, value: "A" },
  { id: 2, value: "B" },
  { id: 3, value: "C" }
];


const [, { id: secondId, value: secondValue }] = data;

console.log(secondId);
console.log(secondValue);
const student = {
  name: "Ali",
  scores: {
    math: 90,
    english: 85
  }
};


const {name, scores: {math, english}} = student;

console.log(name);
console.log(math);
console.log(english);
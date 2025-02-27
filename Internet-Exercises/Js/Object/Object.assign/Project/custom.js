const basePerson = { nationality: "Egyptian" };

let person1 = Object.assign({}, basePerson, { name: "Marawan", age: 28, job: "Front-End Developer"});

console.log(person1);
console.log(basePerson);
const people = [
  { name: "Aya", age: 16 },
  { name: "Ahmed", age: 17 },
  { name: "Laila", age: 19 },
  { name: "Kareem", age: 15 }
];



let result = people.find((element)=> {
  return element.age > 18;
})


console.log(result);
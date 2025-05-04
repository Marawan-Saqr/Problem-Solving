let itemsArray = [
  {name: "Osama", age: 45, title: "FullStack Web"},
  {name: "Marawan", age: 28, title: "Front-End"},
  {name: "Mohmmed", age: 32, title: "IT"},
  {name: "Yassmina", age: 24, title: "Graphic Design"},
]


let filtered = itemsArray.filter((element)=> {
  return element.age > 40;
});


console.log(filtered);
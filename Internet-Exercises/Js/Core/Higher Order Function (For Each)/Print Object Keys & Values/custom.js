const employee = {
  name: "Marawan",
  age: 28,
  position: "Developer"
};


Object.keys(employee).forEach((element)=> {
  console.log(`${element} => ${employee[element]}`);
})
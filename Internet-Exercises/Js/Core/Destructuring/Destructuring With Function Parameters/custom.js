function printUser({ name, age, country }) {
  console.log(`${name} is ${age} years old and lives in ${country}.`);
}

const user = {
  name: "Mona",
  age: 30,
  country: "Egypt"
};



printUser({name: "Mona", age: 30, country: "Egypt"});
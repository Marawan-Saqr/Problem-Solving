const user = {
  name: "Ali",
  age: 30,
  job: "Developer"
};


for (let property in user) {
  console.log(`${property}: ${user[property]}`);
}
const users = [
  { name: "Ali", age: 25, skills: ["HTML", "CSS", "JavaScript"] },
  { name: "Sara", age: 30, skills: ["Python", "Django"] },
  { name: "Mona", age: 22, skills: ["Java", "Spring", "SQL"] }
];


for (let user in users) {
  console.log(`${users[user].name} Is ${users[user].age} Years Old`);
  for (let skill of users[user].skills) {
    console.log("-" + skill);
  }
}
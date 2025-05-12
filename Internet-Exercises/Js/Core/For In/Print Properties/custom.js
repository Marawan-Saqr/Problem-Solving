let student = {
  name: "Sara",
  grade: "A",
  age: 20
};



for (let key in student) {
  console.log(key + ": " + student[key]);
}
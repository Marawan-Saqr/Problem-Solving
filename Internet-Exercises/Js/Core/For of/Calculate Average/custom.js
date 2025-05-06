const grades = [90, 75, 88, 100];

let average = 0;
for (let grade of grades) {
  average += grade;
}

console.log(average / grades.length);
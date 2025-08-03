const scores = {
  math: 120,
  physics: 90,
  chemistry: 150,
  english: 80
};


let valuesOnly = Object.values(scores);

let result = valuesOnly.filter((element)=> {
  return element > 100;
});

console.log(result.length);
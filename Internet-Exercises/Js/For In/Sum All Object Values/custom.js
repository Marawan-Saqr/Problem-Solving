const obj = {
  a: 5,
  b: 10,
  c: 15
}

let result = 0;
for (let num in obj) {
  result += obj[num];
}


console.log(result);
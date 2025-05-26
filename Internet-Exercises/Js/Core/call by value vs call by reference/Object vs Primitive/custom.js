function updatePrimitive(x) {
  x = x + 1;
}

function updateObject(obj) {
  obj.count++;
}

let num = 10;
let counter = { count: 10 };

updatePrimitive(num);
updateObject(counter);

console.log(num);           // 10
console.log(counter.count); // 11

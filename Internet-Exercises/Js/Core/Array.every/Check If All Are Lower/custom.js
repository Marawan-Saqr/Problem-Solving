let letters = ['a', 'b', 'c', 'd'];

let result = letters.every((element)=> {
  return element === element.toLowerCase();
});

console.log(result);
let words = ['tree', 'bird', 'sky', 'sunshine'];

let result = words.every((element)=> {
  return element.length > 3;
});

console.log(result);
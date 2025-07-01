let items = ['a', 'b', 'c', 'd'];

let edit = [...items];

let result = edit.filter((element)=> {
  return element !== "b";
});


console.log(result);
console.log(items);
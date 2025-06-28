let users = [
  { name: 'Ali', active: true },
  { name: 'Sara', active: true },
  { name: 'Mona', active: true }
];

let result = users.every((element)=> {
  return element.active === true;
});

console.log(result);
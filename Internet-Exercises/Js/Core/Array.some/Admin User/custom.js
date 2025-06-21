const users = [
  { name: "Ali", isAdmin: false },
  { name: "Sara", isAdmin: false },
  { name: "Omar", isAdmin: true }
];

let result = users.some((user)=> {
  return user.isAdmin === true;
})


console.log(result);
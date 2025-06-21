const names = ["Mona", "Ahmed", "Samir", "Laila"];

let result = names.some((name)=> {
  return name.startsWith("A");
})

console.log(result);
const names = ["Ali", "Sarah", "Mohammed", "Omar", "Zeinab"];

let result = names.find((element)=> {
  return element.length > 5;
})

console.log(result);
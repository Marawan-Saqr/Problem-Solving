const items = [null, undefined, 0, "", false];

let result = items.some((item)=> {
  return item;
})


console.log(result);
let arr = [1, ['a', [2, [3, 'b']]], ['c', [4, [5]]]];
let flatedNew = arr.flat(Infinity);
let filtered = flatedNew.filter((element)=> {
  return typeof element === "number";
});
console.log(filtered);
const mixed = [
  [1, 2],
  "string",
  123,
  {name: "ali"},
  ["a", "b"],
  null
];



function filterArrays(arr) {

  let result = arr.filter((element)=> {
    return Array.isArray(element);
  })

  return result;

}


console.log(filterArrays(mixed));
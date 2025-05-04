function filterStartsWithA(arr) {

  let result = arr.filter((element) => {
    return element.startsWith("A") || element.startsWith("a");
  })

  return result;

}


console.log(filterStartsWithA(['apple', 'banana', 'avocado', 'grape', 'Apricot']));
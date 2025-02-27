function elimination(arr) {

  let filteredElement = arr.filter((element)=> {
    return arr.indexOf(element) !== arr.lastIndexOf(element);
  })

  if (filteredElement.length === 0) {
    return null;
  } else {
    return Number(filteredElement.slice(1).join(""));
  }

}



console.log(elimination([2, 5, 34, 1, 22, 7]));
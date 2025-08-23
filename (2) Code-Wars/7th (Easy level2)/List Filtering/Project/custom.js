function filter_list(l) {

  let filterArray = l.filter((element)=> {
    return typeof element === "number";
  });

  return filterArray;

}



console.log(filter_list([1, 2, 'a', 'b']));
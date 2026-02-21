function filter_list(l) {

  let filterItems = l.filter((element)=> {
    return typeof element === "number";
  });

  return filterItems;

}



console.log(filter_list([1, 2, 'a', 'b']));
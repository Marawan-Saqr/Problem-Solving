function sortList(sortBy, list) {

  if (list.length === 0) {
    return [];
  }

  if (sortBy === "a") {
    return list.sort((a, b)=> b.a - a.a);
  } else if (sortBy === "b") {
    return list.sort((a, b)=> b.b - a.b);
  }

}


console.log(sortList("a", [
  {"a": 1, "b": 3},
  {"a": 3, "b": 2},
  {"a": 2, "b": 40},
  {"a": 4, "b": 12}
]));
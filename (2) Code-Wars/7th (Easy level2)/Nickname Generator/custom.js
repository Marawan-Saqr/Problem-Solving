function filter_list(l) {
  let filter = l.filter((number) => typeof number === 'number');
  return filter;
}

console.log(filter_list([1, 2, 'aasf', '1', '123', 123]));


function filterFalsy(data) {
  let filteredData = data.filter((element) => {
    return element;
  });

  return filteredData;
}

console.log(filterFalsy([0, "hello", false, 42, "", undefined, "world"])); 
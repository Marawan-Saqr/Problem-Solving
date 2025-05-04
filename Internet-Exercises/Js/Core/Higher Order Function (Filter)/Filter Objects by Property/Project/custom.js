function filterProberty(objects) {

  let filterObj = objects.filter(function(element) {
    return element.inStock === true;
  })

  return filterObj;


}

console.log(filterProberty([
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Phone", price: 500, inStock: false },
  { name: "Pc", price: 1200, inStock: false },
  { name: "Tablet", price: 300, inStock: true }
]));
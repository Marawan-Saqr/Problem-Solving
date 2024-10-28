const store = {
  products: [
    {
      name: "Milk",
      price: 30,
      category: "Cheeses & Milk"
    },
    {
      name: "Cheeses",
      price: 70,
      category: "Cheeses & Milk"
    },
    {
      name: "Chips",
      price: 10,
      category: "Potato"
    },
  ]
}

function productsLoop(items) {

  let result = [];
  items.forEach(element => {
    result.push(element);
  });

  return result;

}


console.log(productsLoop(store.products));
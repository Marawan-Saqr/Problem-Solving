let products = {
  laptop: 1000,
  phone: 500,
  tablet: 300
};



for (let key in products) {
  products[key] = products[key] * 1.10;
}


console.log(products);
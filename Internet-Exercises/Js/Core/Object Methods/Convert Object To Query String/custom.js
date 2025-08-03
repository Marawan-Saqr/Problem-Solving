const product = {
  name: "Laptop",
  price: 10000,
  brand: "Dell"
};


let result = "";
let lastWord = Object.keys(product);
for (let property in product) {
  if (property === lastWord[lastWord.length - 1]) {
    result += `${property}=${product[property]}`;
  } else {
    result += `${property}=${product[property]}&`;
  }
}


console.log(result);
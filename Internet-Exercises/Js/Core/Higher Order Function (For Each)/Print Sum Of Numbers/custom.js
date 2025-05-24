const prices = {
  apple: 3,
  banana: 2,
  orange: 4
};


let result = 0;
Object.values(prices).forEach((element)=> {
  result += element;
})

console.log(result);
function search(budget, prices) {

  let canBuy = [];
  for (let i = 0; i < prices.length; i++) {
    if (budget >= prices[i]) {
      canBuy.push(prices[i]);
    }
  }

  return canBuy.sort((a, b)=> a - b).join();

}



console.log(search(3, [6, 2, 2, 9, 1]));
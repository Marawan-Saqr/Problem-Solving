function commonGround(s1, s2){

  let splitedOne = s1.split(" ");
  let splitedTwo = s2.split(" ");
  let result = [];

  for (let i = 0; i < splitedTwo.length; i++) {
    if (splitedOne.includes(splitedTwo[i])) {
      result.push(splitedTwo[i]);
    }
  }

  return result.length === 0 ? "death" : result.join(" ");

}



console.log(commonGround("eat a burger and drink a coke", "drink a coke"));
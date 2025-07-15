function removeRotten(bagOfFruits) {

  if (bagOfFruits === null || bagOfFruits === undefined) {
    return [];
  }


  let result = [];
  for (let i = 0; i < bagOfFruits.length; i++) {
    if (bagOfFruits[i].startsWith("rotten")) {
      result.push(bagOfFruits[i].slice(6).toLowerCase());
    } else {
      result.push(bagOfFruits[i]);
    }
  }

  return result;

}



console.log(removeRotten(null));
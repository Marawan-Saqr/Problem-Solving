function solve(stones) {

  if (stones.length === 0) {
    return 0;
  }

  let counter = 0;
  for (let i = 0; i < stones.length; i++) {
    if (stones[i] === stones[i + 1]) {
      counter++;
    }
  }

  return counter;

}



console.log(solve("BGRBGBR"));
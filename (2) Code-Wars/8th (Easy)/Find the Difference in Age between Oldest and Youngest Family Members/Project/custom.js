function differenceInAges(ages){

  let minAge = Math.min(...ages);
  let maxAge = Math.max(...ages);

  return [minAge, maxAge, maxAge - minAge];

}

console.log(differenceInAges([82, 15, 6, 38, 35]));
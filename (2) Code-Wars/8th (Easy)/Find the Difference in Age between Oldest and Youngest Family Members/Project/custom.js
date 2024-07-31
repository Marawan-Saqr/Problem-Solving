function differenceInAges(ages){

  let highestAge = ages[0];
  let smallestAge = ages[0];
  let diffOfAges = 0;
  let finalResult = [];

  for (let i = 0; i < ages.length; i++) {
    if (highestAge < ages[i]) {
      highestAge = ages[i];
    } else if (smallestAge > ages[i]) {
      smallestAge = ages[i];
    }
  }

  diffOfAges = highestAge - smallestAge;
  finalResult.push(smallestAge);
  finalResult.push(highestAge);
  finalResult.push(diffOfAges);

  return finalResult;

}

console.log(differenceInAges([82, 15, 6, 38, 35]));
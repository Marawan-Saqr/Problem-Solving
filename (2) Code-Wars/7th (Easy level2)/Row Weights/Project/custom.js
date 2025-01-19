function rowWeights(array){

  let teamOne = 0;
  let teamTwo = 0;
  let result = [];

  for (let i = 0; i < array.length; i+= 2) {
    teamOne += array[i];
  }

  for (let j = 1; j < array.length; j+= 2) {
    teamTwo += array[j];
  }

  result.push(teamOne, teamTwo);

  return result;


}



console.log(rowWeights([50, 60, 70, 80]));
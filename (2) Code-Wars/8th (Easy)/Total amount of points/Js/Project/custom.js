function points(games) {

  let firstTeamPoints = 0;
  let secondTeamPoints = 0;

  for (let i = 0; i < games.length; i++) {
    let arrayOfNumbers = [];
    for (let j = 0; j < games[i].length; j++) {
      if (!isNaN(games[i][j]) && games[i][j].trim() !== '') {
        arrayOfNumbers.push(games[i][j]);
      }
    }
    if (arrayOfNumbers[0] > arrayOfNumbers[1]) {
      firstTeamPoints += 3;
    } else if (arrayOfNumbers[0] < arrayOfNumbers[1]) {
      secondTeamPoints += 3;
    } else {
      firstTeamPoints++;
      secondTeamPoints++;
    }
  }

  return firstTeamPoints;

}

console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]));
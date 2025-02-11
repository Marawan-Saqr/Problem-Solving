function well(x) {

  let counter = 0;
  for (let i = 0; i < x.length; i++) {
    for (let j = 0; j < x[i].length; j++) {
      if (x[i][j] === "good" || x[i][j] === "gOOd" || x[i][j] === "GOOD") {
        counter++;
      }
    }
  }

  if (counter === 0) {
    return "Fail!";
  } else if (counter <= 2) {
    return "Publish!";
  } else if (counter > 2) {
    return "I smell a series!";
  }

}


console.log(well([['gOOd', 'bad', 'BAD', 'bad', 'bad'], ['bad', 'bAd', 'bad'], ['GOOD', 'bad', 'bad', 'bAd']]));
function well(x){

  let result = [];

  for (let i = 0; i < x.length; i++) {
    if (x[i] === "good") {
      result.push(x[i]);
    }
  }

  if (result.length <= 2 && result.length !== 0) {
    return "Publish!";
  } else if (result.length > 2) {
    return "I smell a series!";
  } else if (result.length === 0) {
    return "Fail!";
  }

}

console.log(well(['good', 'bad', 'bad', 'bad', 'bad']));
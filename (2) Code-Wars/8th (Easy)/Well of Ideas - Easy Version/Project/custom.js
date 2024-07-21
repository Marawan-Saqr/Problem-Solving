function well(x){

  let newArray = [];
  for (let i = 0; i < x.length; i++) {
    if (x[i] === "good") {
      newArray.push(x[i]);
    }
  }

  if (newArray.length === 1 || newArray.length === 2 ) {
    return "Publish!";
  } else if (newArray.length > 2) {
    return "I smell a series!";
  } else {
    return "Fail!";
  }

} 



console.log(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']));
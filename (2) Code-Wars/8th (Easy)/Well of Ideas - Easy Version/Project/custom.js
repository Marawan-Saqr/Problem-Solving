function well(x){

  if (!x.includes("good")) {
    return "Fail!";
  }


  let goodArray = x.filter((element)=> {
    return element === "good";
  });


  if (goodArray.length <= 2) {
    return "Publish!";
  } else {
    return "I smell a series!";
  }

}

console.log(well(['bad', 'bad', 'bad', 'bad', 'bad']));
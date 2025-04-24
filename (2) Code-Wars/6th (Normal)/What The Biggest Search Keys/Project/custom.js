function theBiggestSearchKeys(...params) {

  if (params.length === 0) {
    return "''";
  }


  // Get Longest Length
  let mapped = params.map((element)=> {
    return element.length;
  })
  let biggestLength = Math.max(...mapped);


  let result = [];
  for (let i = 0; i < params.length; i++) {
    if (params[i].length === biggestLength) {
      result.push(params[i]);
    }
  }

  return result.sort().map((element)=> {
    return `'${element}'`;
  }).join(", ");

}



console.log(theBiggestSearchKeys());
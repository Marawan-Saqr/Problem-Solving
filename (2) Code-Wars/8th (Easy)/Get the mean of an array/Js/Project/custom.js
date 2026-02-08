function getAverage(marks){

  let average = marks.reduce((acc, current)=> {
    return acc + current;
  }, 0);

  let result = average / marks.length;
  return Math.floor(result);

}



console.log(getAverage([1, 1, 1, 1, 1, 1, 1, 2]));
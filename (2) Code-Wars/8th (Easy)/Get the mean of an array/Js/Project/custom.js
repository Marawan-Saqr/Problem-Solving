function getAverage(marks){

  let summed = marks.reduce((acc, current)=> {
    return acc + current;
  }, 0);

  return Math.floor(summed / marks.length);

}



console.log(getAverage([1, 1, 1, 1, 1, 1, 1, 2]));
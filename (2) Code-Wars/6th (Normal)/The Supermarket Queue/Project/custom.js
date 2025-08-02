function queueTime(customers, n) {

  if (n === 0) {
    return "Error";
  } else if (n === 1) {
    let mapped = customers.reduce((acc, current)=> {
      return acc + current;
    }, 0);
    return mapped;
  }


  let result = 0;
  let tills = Array(n).fill(0);
  for (let i = 0; i < customers.length; i++) {
    let index = tills.indexOf(Math.min(...tills));
    tills[index] += customers[i];
  }

  return Math.max(...tills);

}



console.log(queueTime([1, 2, 3, 4], 1));
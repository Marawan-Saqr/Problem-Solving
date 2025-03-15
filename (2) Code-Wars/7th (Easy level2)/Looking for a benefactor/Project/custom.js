function newAvg(arr, newavg) {

  let sumOfNumbers = arr.reduce((acc, current) => acc + current, 0);
  let n = arr.length + 1;
  let x = Math.ceil((newavg * n) - sumOfNumbers);
  
  if (x <= 0) {
    throw new Error("Expected donation is too low!");
  }

  return x;

}


console.log(newAvg([14, 30, 5, 7, 9, 11, 15], 90));
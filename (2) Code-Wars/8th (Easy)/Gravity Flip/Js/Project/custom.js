const flip=(d, a)=>{

  if (d === "L") {
    return a.sort((a, b)=> b - a);
  } else {
    return a.sort((a, b)=> a - b);
  }

}

console.log(flip('L', [1, 4, 5, 3, 5]));
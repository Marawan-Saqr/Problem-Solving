const flip=(d, a)=>{

  if (d === 'R') {
    a.sort((a, b) => a - b);
    return a;
  } else if (d === 'L') {
    a.sort((a, b) => b - a);
    return a;
  }

}

console.log(flip('L', [1, 4, 5, 3, 5]));
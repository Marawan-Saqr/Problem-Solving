function persistence(num) {

  let counter = 0;

  while(num.toString().length !== 1) {
    let reduced = num.toString().split("").reduce((acc, current)=> {
      return acc * current;
    }, 1);
    num = reduced;
    counter++;
  }

  return counter;

}


console.log(persistence(999));
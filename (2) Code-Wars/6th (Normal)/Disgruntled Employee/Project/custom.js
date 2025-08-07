function off(n) {

  let switches = new Array(n).fill(false);

  for (let i = 1; i <= n; i++) {
    for (let j = i - 1; j < n; j += i) {
      switches[j] = !switches[j];
    }
  }


  let result = [];
  for (let i = 0; i < switches.length; i++) {
    if (switches[i] === true) {
      result.push(i + 1);
    }
  }

  return result;

}



console.log(off(9));
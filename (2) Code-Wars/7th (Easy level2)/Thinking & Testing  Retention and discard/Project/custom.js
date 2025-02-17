function testit(n){

  if (n <= 0) {
    return [];
  }

  let result = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      result.push(i);
    }
  }

  let finalResult = result.filter((element)=> {
    return element % 2 !== 0;
  })

  return finalResult;

}



console.log(testit(9));
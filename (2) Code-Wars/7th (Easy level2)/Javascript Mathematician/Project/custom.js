const calculate = (...args1) => (...args2) => 
  args1.reduce((sum, num) => sum + num, 0) + 
  args2.reduce((sum, num) => sum + num, 0);




console.log(calculate(1)(1));
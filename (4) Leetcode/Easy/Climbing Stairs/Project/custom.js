var climbStairs = function(n) {

  if (n === 1) {
    return 1;
  }
  if (n === 2) {
    return 2;
  }

  let oneStepBefore = 2;
  let twoStepsBefore = 1;
  let steps = 0;

  for (let i = 3; i <= n; i++) {
    steps = oneStepBefore + twoStepsBefore;
    twoStepsBefore = oneStepBefore;
    oneStepBefore = steps;
  }

  return steps;

}

console.log(climbStairs(5));
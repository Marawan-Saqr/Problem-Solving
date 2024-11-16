function findMax(a, b, c) {

  let maxNumber = Math.max(a, b, c);
  return maxNumber;


}

function logResult(result) {

  return result;

}

const max = findMax(50, 120, 90);
const result = logResult("The Max Number Is");
console.log(`${result} ${max}`);
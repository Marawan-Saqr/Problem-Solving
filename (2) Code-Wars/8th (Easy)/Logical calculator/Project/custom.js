function logicalCalc(array, op){

  let finalResult = array[0];
  for (let i = 1; i < array.length; i++) {
    if (op === "AND") {
      finalResult = finalResult && array[i];
    } else if (op === "OR") {
      finalResult = finalResult || array[i];
    } else if (op === "XOR") {
      finalResult = Boolean(finalResult ^ array[i]);
    }
  }

  return finalResult;

}



console.log(logicalCalc([true, true, true, false], "AND"));
console.log(logicalCalc([true, true, true, false], "OR"));
console.log(logicalCalc([true, true, true, false], "XOR"));

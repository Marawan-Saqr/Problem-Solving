function canCompleteCircuit(gas, cost) {

  let totalGas = 0;
  let currentGas = 0;
  let startIndex = 0;

  for (let i = 0; i < gas.length; i++) {
    const netGas = gas[i] - cost[i];
    totalGas += netGas;
    currentGas += netGas;
    if (currentGas < 0) {
      startIndex = i + 1;
      currentGas = 0;
    }
  }

  return totalGas >= 0 ? startIndex : -1;

}

console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]));
function flickSwitch(arr) {

  let result = [];
  let flagSwitch = true;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "flick") {
      flagSwitch = !flagSwitch;
      result.push(flagSwitch);
    } else {
      result.push(flagSwitch);
    }
  }

  return result;

}



console.log(flickSwitch(['codewars', 'flick', 'code', 'wars']));
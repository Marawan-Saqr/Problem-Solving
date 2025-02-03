function balancedNum(number) {

  let stringed = number.toString();
  let middleIndex = Math.floor(stringed.length / 2);
  let middleNumber = 0;


  // Get Middle Number
  if (stringed.length % 2 === 0) {
    middleNumber = stringed[middleIndex - 1] + stringed[middleIndex];
  } else {
    middleNumber = stringed[middleIndex];
  }


  let leftResult = 0;
  let rightResult = 0;

  for (let i = 0; i < stringed.length; i++) {
    if (i < middleIndex - (stringed.length % 2 === 0 ? 1 : 0)) {
      leftResult += Number(stringed[i]);
    } else if (i > middleIndex + (stringed.length % 2 === 0 ? 0 : 0)) {
      rightResult += Number(stringed[i]);
    }
  }


  if (leftResult === rightResult) {
    return "Balanced";
  } else {
    return "Not Balanced";
  }

}



console.log(balancedNum(73047046));
function solve(a, b) {

  let alicePoints = 0;
  let bobPoints = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      alicePoints++;
    } else if (a[i] < b[i]) {
      bobPoints++;
    } else {
      alicePoints;
      bobPoints;
    }
  }

  if (alicePoints === bobPoints) {
    return alicePoints.toString() + ", " + bobPoints.toString() + ": that looks like a \"draw\"! Rock on!";
  } else if (alicePoints < bobPoints) {
    return alicePoints.toString() + ", " + bobPoints.toString() + ": Bob made \"Jeff\" proud!";
  } else {
    return alicePoints.toString() + ", " + bobPoints.toString() + ": Alice made \"Kurt\" proud!";
  }

}

console.log(solve([47, 7, 2], [47, 7, 2]));
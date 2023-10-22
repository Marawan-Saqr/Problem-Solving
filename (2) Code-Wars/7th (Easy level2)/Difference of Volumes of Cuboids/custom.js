function findDifference(a, b) {
  let CubeVolumeOne = 1;
  let CubeVolumeTwo = 1;
  for (let i = 0; i < a.length; i++) {
    CubeVolumeOne *= a[i];
  }

  for (let i = 0; i < b.length; i++) {
    CubeVolumeTwo *= b[i];
  }
  let finalResult = 0;
  finalResult = CubeVolumeOne - CubeVolumeTwo;

  if (finalResult < 0) {
    return finalResult * -1;
  } else {
    return finalResult;
  }
}



console.log(findDifference([17, 14, 6], [29, 30, 22]));










function getMiddleElements(array) {

  const midIndex = Math.floor(array.length / 2);
  if (array.length % 2 === 0) {
    return array.slice(midIndex - 1, midIndex + 1);
  } else {
    return array.slice(midIndex, midIndex + 1);
  }

}


console.log(getMiddleElements([10, 20, 30, 40, 50, 60, 70]));
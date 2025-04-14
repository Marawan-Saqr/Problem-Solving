function countSmileys(arr) {

  let goodMarksStart = [":", ";"];
  let goodMarksEnd = [")", "D"];
  let goodMarksMiddle = ["-", "~"];
  let counter = 0;

  for (let i = 0; i < arr.length; i++) {
    let smiley = arr[i];
    if (smiley.length >= 2 && smiley.length <= 3) {
      let startValid = goodMarksStart.includes(smiley[0]);
      let endValid = goodMarksEnd.includes(smiley[smiley.length - 1]);
      let middleValid = smiley.length === 2 || goodMarksMiddle.includes(smiley[1]);
      if (startValid && endValid && middleValid) {
        counter++;
      }
    }
  }

  return counter;

}


console.log(countSmileys([':)',':(',':D',':O',':;']));
function alphabetWar(fight) {

  let leftSide = 0;
  let rightSide = 0;

  const left = {
    w: 4,
    p: 3,
    b: 2,
    s: 1
  }

  const right = {
    m: 4,
    q: 3,
    d: 2,
    z: 1
  }


  for (let char of fight) {
    if (left.hasOwnProperty(char)) {
      leftSide += left[char];
    } else if (right.hasOwnProperty(char)) {
      rightSide += right[char];
    }
  }


  if (leftSide > rightSide) {
    return "Left side wins!";
  } else if (rightSide > leftSide) {
    return "Right side wins!";
  } else {
    return "Let's fight again!";
  }

}


console.log(alphabetWar("zdqmwpbs"));
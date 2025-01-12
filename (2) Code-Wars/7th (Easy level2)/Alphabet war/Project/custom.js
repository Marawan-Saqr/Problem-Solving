function alphabetWar(fight) {

  let leftTotal = 0;
  let rightTotal = 0;

  const leftSide = {
    w: 4,
    p: 3,
    b: 2,
    s: 1
  };

  const rightSide = {
    m: 4,
    q: 3,
    d: 2,
    z: 1
  };


  for (const char of fight) {
    if (char in leftSide) {
      leftTotal += leftSide[char];
    } else if (char in rightSide) {
      rightTotal += rightSide[char];
    }
  }

  if (leftTotal > rightTotal) {
    return "Left side wins!";
  } else if (leftTotal < rightTotal) {
    return "Right side wins!";
  } else {
    return "Let's fight again!";
  }


}


console.log(alphabetWar("zdqmwpbs"));
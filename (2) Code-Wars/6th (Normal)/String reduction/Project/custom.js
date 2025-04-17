function solve(a, b) {

  if (b.length > a.length) {
    return 0;
  }

  let sortedA = a.split("").sort().join("");
  let sortedB = b.split("").sort().join("");
  let counter = 0;

  let objOne = {};
  for (let i = 0; i < sortedA.length; i++) {
    if (objOne[sortedA[i]]) {
      objOne[sortedA[i]] += 1;
    } else {
      objOne[sortedA[i]] = 1;
    }
  }

  let objTwo = {};
  for (let i = 0; i < sortedB.length; i++) {
    if (objTwo[sortedB[i]]) {
      objTwo[sortedB[i]] += 1;
    } else {
      objTwo[sortedB[i]] = 1;
    }
  }

  for (let char in objOne) {
    if (!objTwo[char]) {
      counter += objOne[char];
    } else if (objOne[char] < objTwo[char]) {
      return 0;
    } else {
      counter += objOne[char] - objTwo[char];
    }
  }

  return counter;

}

console.log(solve("abcdexyz", "yxz"));

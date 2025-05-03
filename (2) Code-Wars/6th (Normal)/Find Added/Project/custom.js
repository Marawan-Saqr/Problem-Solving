function findAdded(st1, st2) {

  let sortedOne = st1.split("").sort((a, b)=> a - b).join("");   // 4444556
  let sortedTwo = st2.split("").sort((a, b)=> a - b).join("");   // 444455566667

  let objOne = {};
  for (let i = 0; i < sortedOne.length; i++) {
    if (objOne[sortedOne[i]]) {
      objOne[sortedOne[i]]++;
    } else {
      objOne[sortedOne[i]] = 1;
    }
  }

  let objTwo = {};
  for (let i = 0; i < sortedTwo.length; i++) {
    if (objTwo[sortedTwo[i]]) {
      objTwo[sortedTwo[i]]++;
    } else {
      objTwo[sortedTwo[i]] = 1;
    }
  }

  console.log(objOne);  // {4: 4, 5: 2, 6: 1}
  console.log(objTwo);  // {4: 4, 5: 3, 6: 4, 7: 1}


  let result = "";
  for (let char in objTwo) {
    let count1 = objOne[char] || 0;
    let count2 = objTwo[char];
    let diff = count2 - count1;
    if (diff > 0) {
      result += char.repeat(diff);
    }
  }
  return result;

}



console.log(findAdded("4455446", "447555446666"));
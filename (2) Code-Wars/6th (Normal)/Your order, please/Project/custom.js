function order(words) {

  if (words === "") {
    return "";
  }

  let splited = words.split(" ");
  let numbersArray = [];
  for (let i = 0; i < splited.length; i++) {
    numbersArray.push(splited[i].match(/\d+/g).join(""));               // ['2', '1', '4', '3']
  }


  let newObj = {};
  for (let i = 0; i < splited.length; i++) {
    for (let j = 0; j < numbersArray.length; j++) {
      if (splited[i].includes(numbersArray[j])) {
        newObj[splited[i]] = numbersArray[i];
      }
    }
  }                                                         // {is2: '2', Thi1s: '1', T4est: '4', 3a: '3'}


  const sortedKeys = Object.entries(newObj).sort((a, b) => a[1] - b[1]).map(entry => entry[0]);
  return sortedKeys.join(" ");

}


console.log(order("is2 Thi1s T4est 3a"));
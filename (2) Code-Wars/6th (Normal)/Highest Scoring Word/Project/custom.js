function high(x) {

  let splited = x.split(" ");  // ["man", "i", "need", "a", "taxi", "up", "to", "ubud"]
  let result = [];
  let sum = 0;


  for (let i = 0; i < splited.length; i++) {
    sum = 0;
    for (let j = 0; j < splited[i].length; j++) {
      sum += splited[i][j].charCodeAt(0) - 97 + 1;
    }
    let obj = {
      total: sum,
      word: splited[i]
    }
    result.push(obj);
  }


  let heightsNumber = -Infinity;
  let neededName = "";

  for (let obj of result) {
    if (obj.total > heightsNumber) {
      heightsNumber = obj.total;
      neededName = obj.word;
    }
  }

  return neededName;

}


console.log(high("man i need a taxi up to ubud"));
function capitalize(s){

  let splited = s.split("");  // ['a', 'b', 'c', 'd', 'e', 'f']

  // For First Result
  let firstResult = [];
  for (let i = 0; i < splited.length; i++) {
    if (i % 2 === 0) {
      firstResult.push(splited[i].toUpperCase());
    } else {
      firstResult.push(splited[i].toLowerCase());
    }
  }

  // For Second Result
  let secondResult = [];
  for (let j = 0; j < splited.length; j++) {
    if (j % 2 !== 0) {
      secondResult.push(splited[j].toUpperCase());
    } else {
      secondResult.push(splited[j].toLowerCase());
    }
  }


  let finalResult = [];

  finalResult.push(firstResult.join(""));
  finalResult.push(secondResult.join(""));

  return finalResult;

}

console.log(capitalize("abcdef"));
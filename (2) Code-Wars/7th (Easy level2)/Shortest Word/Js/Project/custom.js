function findShort(s) {

  let splited = s.split(" ");
  let result = [];

  for (let i = 0; i < splited.length; i++) {
    result.push(splited[i].length);
  }

  let sorted = result.sort((a, b) => a - b);

  return sorted[0];

}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));

//////////////////////////Another Solution////////////////////////////////////////////////////

function findShort(s) {

  let splited = s.split(" ");
  let sorted = splited.sort((a, b) => a.length - b.length);
  let newArray = [];

  newArray.push(sorted[0].length);

  return parseInt(newArray.join());

}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
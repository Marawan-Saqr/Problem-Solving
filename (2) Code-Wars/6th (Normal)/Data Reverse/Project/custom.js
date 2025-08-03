function dataReverse(data) {

  if (data.length === 0) {
    return [];
  }

  let change = data.join("");
  const matches = change.match(/.{8}/g);
  let joined = matches.reverse().join("");

  let result = [];
  for (let i = 0 ; i < joined.length; i++) {
    result.push(Number(joined[i]));
  }

  return result;

}



console.log(dataReverse([1,1,1,1,1,1,1,1, 0,0,0,0,0,0,0,0, 0,0,0,0,1,1,1,1, 1,0,1,0,1,0,1,0]));
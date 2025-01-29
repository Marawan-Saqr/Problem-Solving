function doubles(s){

  let arr = s.split("");
  let duplicates = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      duplicates.push(arr[i], arr[i + 1]);
      arr.splice(i, 2);
      i = Math.max(-1, i - 2);
    }
  }

  let joined = arr.join("");
  return joined;

}



console.log(doubles("abbcccdddda"));
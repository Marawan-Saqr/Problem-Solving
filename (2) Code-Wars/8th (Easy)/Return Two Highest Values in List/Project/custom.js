function twoHighest(arr) {

  let uniqueArr = [...new Set(arr)];

  uniqueArr.sort((a, b) => b - a);

  return uniqueArr.slice(0, 2);

}

console.log(twoHighest([15, 20, 20, 17]));
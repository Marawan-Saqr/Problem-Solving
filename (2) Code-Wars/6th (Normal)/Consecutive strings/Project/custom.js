function longestConsec(strarr, k) {

  let result = [];
  for (let i = 0; i <= strarr.length - k; i++) {
    let obj = {};
    let combine = "";
    for (let j = 0; j < k; j++) {
      combine += strarr[i + j];
    }
    obj.wordName = combine;
    result.push(obj);
  }


  let longest = 0;
  let longestWord = "";
  for (let i = 0; i < result.length; i++) {
    let length = result[i].wordName.length;
    if (length > longest) {
      longest = length;
      longestWord = result[i].wordName;
    }
  }

  return longestWord;

}


console.log(longestConsec(["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], 2));
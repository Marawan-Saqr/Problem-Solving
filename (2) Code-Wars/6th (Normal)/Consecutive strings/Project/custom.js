function longestConsec(strarr, k) {

  if (strarr.length === 0 || k > strarr.length || k <= 0) return "";

  let longestStr = "";
  for (let i = 0; i <= strarr.length - k; i++) {
    let combinedString = strarr.slice(i, i + k).join("");
    if (combinedString.length > longestStr.length) {
      longestStr = combinedString;
    }
  }

  return longestStr;

}


console.log(longestConsec(["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], 2));
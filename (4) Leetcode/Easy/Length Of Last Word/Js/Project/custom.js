var lengthOfLastWord = function(s) {

  let trimmed = s.trim().split(" ");
  let result = 0;
  for (let i = 0; i < trimmed.length; i++) {
    if (i === trimmed.length - 1) {
      result = trimmed[i].length;
    }
  }

  return result;

}

console.log(lengthOfLastWord(" Hello World "));
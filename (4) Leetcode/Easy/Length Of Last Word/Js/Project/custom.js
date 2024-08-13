var lengthOfLastWord = function(s) {

  let trimitedSpace = s.trim();
  let splited = trimitedSpace.split(" ");
  
  for (let i = splited.length - 1; i >= 0; i--) {
    return splited[i].length;
  }

}

console.log(lengthOfLastWord(" Hello World "));
var splitInParts = function(s, partLength) {

  let result = "";
  for (let i = 0; i < s.length; i += partLength) {
    result += s.substring(i, i + partLength) + " ";
  }

  return result.trim();

}



console.log(splitInParts("supercalifragilisticexpialidocious", 3));
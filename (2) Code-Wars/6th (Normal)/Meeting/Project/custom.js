function meeting(s) {

  let namesArray = s.toUpperCase().split(";");

  // Operation On Names
  let result = [];
  for (let i = 0; i < namesArray.length; i++) {
    let singleWord = namesArray[i].split(":");
    let joining = "";
    joining = `(${singleWord[singleWord.length - 1]}, ${singleWord[0]})`;
    result.push(joining);
  }

  return result.sort().join("");

}



console.log(meeting("Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:STAN;Alex:Cornwell;Lewis:Kern;Megan:Stan;Alex:Korn"));
var finalString = function(s) {

  let result = [];
  let splited = s.split("");

  for (let i = 0; i < splited.length; i++) {
    if (splited[i] !== "i" ) {
      result.push(splited[i]);
    } else {
      result.reverse();
    }
  }

  return result.join("");

}

console.log(finalString("poiinter"));
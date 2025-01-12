function alphaSeq(str) {

  let splited = str.split("").map((element)=> {
    return element.toLowerCase();
  })

  let sorted = splited.sort().join("");

  let result = "";
  for (let i = 0; i < sorted.length; i++) {
    if (i === sorted.length - 1) {
      result += sorted[i].toUpperCase();
      result += sorted[i].repeat(sorted[i].charCodeAt(0) - 97);
    } else {
      result += sorted[i].toUpperCase();
      result += sorted[i].repeat(sorted[i].charCodeAt(0) - 97);
      result += ",";
    }
  }

  return result;


}


console.log(alphaSeq("ZpglnRxqenU"));
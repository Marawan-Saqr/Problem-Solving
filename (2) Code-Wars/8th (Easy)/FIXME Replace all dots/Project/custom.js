var replaceDots = function(str) {

  let splited = str.split(".");
  return splited.join("-");

}



console.log(replaceDots("one.two.three"));
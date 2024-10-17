function vaporcode(string) {

  let noSpaceStr = string.replace(/\s+/g, '');
  let splited = noSpaceStr.split("");
  let newArray = [];

  for (let i = 0; i < splited.length; i++) {
    newArray.push(splited[i].toUpperCase());
    newArray.push("  ");
  }

  newArray.pop();

  return newArray.join("");

}

console.log(vaporcode("Lets go to the movies"));
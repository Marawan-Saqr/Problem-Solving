String.prototype.isUpperCase = function() {

  let noSpaces = this.replace(/[^a-zA-Z0-9]/g, "");
  for (let i = 0; i < noSpaces.length; i++) {
    if (noSpaces[i] === noSpaces[i].toLowerCase()) {
      return false;
    }
  }

  return true;

}

console.log("BOB WALKS HIS DOG EVERY DAY.".isUpperCase());
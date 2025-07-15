String.prototype.toJadenCase = function () {

  let result = [];
  let splited = this.split(" ");

  for (let i = 0; i < splited.length; i++) {
    result.push(splited[i].charAt(0).toUpperCase() + splited[i].slice(1));
  }

  return result.join(" ");

}

console.log("How can mirrors be real if our eyes aren't real".toJadenCase());
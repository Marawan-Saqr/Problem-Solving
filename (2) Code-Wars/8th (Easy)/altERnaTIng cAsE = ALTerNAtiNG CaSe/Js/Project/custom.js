String.prototype.toAlternatingCase = function () {

  let result = this.split("").map(function(element) {
    if (element === element.toUpperCase()) {
      return element.toLowerCase();
    } else {
      return element.toUpperCase();
    }
  })

  return result.join("");

}

console.log("hello world".toAlternatingCase());
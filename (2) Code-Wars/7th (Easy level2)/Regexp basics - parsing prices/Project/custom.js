String.prototype.toCents = function() {

  if (/^\$\d+\.\d{2}$/.test(this)) {
    return Number(this.match(/\d+/g).join(""));
  } else {
    return null;
  }

}



console.log("1".toCents());
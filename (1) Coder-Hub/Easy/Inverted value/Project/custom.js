function isMirrored(num) {

  let str = num.toString();

  let splited = str.split("").reverse().join("");

  if (str === splited) {
    return true;
  } else {
    return false;
  }

}

console.log(isMirrored(121));
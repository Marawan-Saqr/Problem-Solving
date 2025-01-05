var FilterNumbers = function(str) {
  let newStr = str.split("").filter((element)=> {
    return isNaN(element);
  })
  return newStr.join("");
}


console.log(FilterNumbers("aa1bb2cc3dd"));
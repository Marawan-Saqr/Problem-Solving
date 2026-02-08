function stringy(size) {

  if (size === 1) {
    return "1";
  }

  let result = "";
  for (let i = 0; i < size; i++) {
    if (result.length === "") {
      result += "1";
    } else if (result[result.length - 1] === "1") {
      result += "0";
    } else {
      result += "1";
    }
  }

  return result;

}




console.log(stringy(3));
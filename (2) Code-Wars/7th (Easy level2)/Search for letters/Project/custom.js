function change(string) {

  let positions = "000000000000000000000000000";
  let charactersOnly = string.replace(/[^a-zA-Z]/g, '').split("").join("").toLowerCase();
  let result = "";
  let indexesArray = [];
  let index = 0;

  for (let i = 0; i < charactersOnly.length; i++) {
    index =  charactersOnly[i].charCodeAt(0) - 97 + 1;
    indexesArray.push(index);
  }

  for (let i = 1; i < positions.length; i++) {
    if (indexesArray.includes(i)) {
      result += "1";
    } else {
      result += "0";
    }
  }

  return result;

}


console.log(change("a **&  bZ"));
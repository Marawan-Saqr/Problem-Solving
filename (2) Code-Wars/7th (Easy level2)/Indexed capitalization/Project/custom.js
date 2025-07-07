function capitalize(string, indices) {

  let result = "";
  for (let i = 0; i < string.length; i++) {
    if (indices.includes(i)) {
      result += string[i].toUpperCase();
    } else {
      result += string[i];
    }
  }

  return result;

}


console.log(capitalize("abracadabra", [2, 6, 9, 10]));
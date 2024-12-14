function getStrings(city){

  let smallChar = city.replace(/\s+/g, '').toLowerCase();

  let result = "";
  for (let i = 0; i < smallChar.length; i++) {
    if (smallChar.indexOf(smallChar[i]) === smallChar.lastIndexOf(smallChar[i])) {
      result += `${smallChar[i]}:*,`;
    } else {
      if (result.includes(smallChar[i])) {
        continue;
      } else {
        const count = smallChar.split(smallChar[i]).length - 1;
        result += `${smallChar[i]}:${"*".repeat(count)},`;
      }
    }
  }


  return result.slice(0, -1);

}




console.log(getStrings("Las Vaegas"));
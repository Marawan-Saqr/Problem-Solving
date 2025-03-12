function dashatize(num) {

  let stringed = num.toString();
  let result = "";

  for (let i = 0; i < stringed.length; i++) {
    if (stringed[i] % 2 === 0) {
      result += stringed[i];
    } else if (stringed[i] % 2 !== 0) {
      result += `-${stringed[i]}-`;
    }
  }

  return result.replace(/^[-]+|[-]+$/g, "").replace(/-+/g, "-");

}



console.log(dashatize(127747));
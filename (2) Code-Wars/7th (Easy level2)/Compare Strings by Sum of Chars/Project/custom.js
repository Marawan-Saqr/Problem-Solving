function compare(s1, s2) {
  const isS1Invalid = s1 === "" || !/^[a-zA-Z]+$/.test(s1) || s1 === null;
  const isS2Invalid = s2 === "" || !/^[a-zA-Z]+$/.test(s2) || s2 === null;

  if (isS1Invalid && isS2Invalid) {
    return true;
  }

  if (isS1Invalid || isS2Invalid) {
    return false;
  }


  let firstUpperCase = s1.toUpperCase();
  let secondUpperCase = s2.toUpperCase();


  let sumFirstUpperCase = [...firstUpperCase].reduce((sum, char) => sum + char.charCodeAt(0), 0);
  let sumSecondUpperCase = [...secondUpperCase].reduce((sum, char) => sum + char.charCodeAt(0), 0);

  return sumFirstUpperCase === sumSecondUpperCase;

}

// Test cases
console.log(compare("ZzZz", "ffPFF"));
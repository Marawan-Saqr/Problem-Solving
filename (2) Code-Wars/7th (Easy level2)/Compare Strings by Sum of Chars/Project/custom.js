function compare(s1, s2) {

  const isS1Invalid = s1 === "" || !/^[a-zA-Z]+$/.test(s1) || s1 === null;
  const isS2Invalid = s2 === "" || !/^[a-zA-Z]+$/.test(s2) || s2 === null;


  if (isS1Invalid && isS2Invalid) {
    return true;
  }

  if (isS1Invalid || isS2Invalid) {
    return false;
  }


  let upperOne = s1.toUpperCase();
  let upperTwo = s2.toUpperCase();


  let resultOne = 0;
  for (let i = 0; i < upperOne.length; i++) {
    resultOne += upperOne[i].charCodeAt(0);
  }


  let resultTwo = 0;
  for (let i = 0; i < upperTwo.length; i++) {
    resultTwo += upperTwo[i].charCodeAt(0);
  }

  return resultOne === resultTwo;

}


console.log(compare("ZzZz", "ffPFF"));
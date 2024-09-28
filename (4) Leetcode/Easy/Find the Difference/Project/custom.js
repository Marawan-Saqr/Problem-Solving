var findTheDifference = function(s, t) {

  let resultT = 0;
  let resultS = 0;

  for (let i = 0; i < t.length; i++) {
    resultT += t[i].charCodeAt(0);
  }

  for (let j = 0; j < s.length; j++) {
    resultS += s[j].charCodeAt(0);
  }


  let theDifference = resultT - resultS;

  return String.fromCharCode(theDifference);

}


console.log(findTheDifference("abcd", "abcde"));
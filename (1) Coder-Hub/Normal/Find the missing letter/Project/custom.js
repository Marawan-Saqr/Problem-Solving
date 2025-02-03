function missingLetter(txt) {

  let result = "";
  let startCharCode = txt.charCodeAt(0);
  let endCharCode = txt.charCodeAt(txt.length - 1);


  for (let i = startCharCode; i <= endCharCode; i++) {
    result += String.fromCharCode(i);
  }


  let finalResult = "";

  for (let j = 0; j < result.length; j++) {
    if (!txt.includes(result[j])) {
      finalResult += result[j];
    }
  }

  return finalResult;

}



console.log(missingLetter("acdefgi"));
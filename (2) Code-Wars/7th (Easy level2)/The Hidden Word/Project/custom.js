function hiddenWord(num) {

  if (!num >= 100 && !num <= 999999) {
    return false;
  }

  const reversedObj = {
    "6" : "a",
    "1" : "b",
    "7" : "d",
    "4" : "e",
    "3" : "i",
    "2" : "l",
    "9" : "m",
    "8" : "n",
    "0" : "o",
    "5" : "t",
  }


  let stringed = num.toString();
  let result = "";

  for (let i = 0; i < stringed.length; i++) {
    result += reversedObj[stringed[i]];
  }

  return result;

}
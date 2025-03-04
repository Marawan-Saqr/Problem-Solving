function charConcat(string) {

  const mid = Math.floor(string.length / 2);

  let newString = "";
  if (string.length % 2 !== 0 && mid !== " " && mid !== "!") {
    newString = string.slice(0, mid) + string.slice(mid + 1);
  } else {
    newString = string;
  }


  let finalResult = "";
  for (let i = 0; i < newString.length / 2; i++) {
    finalResult += (newString[i] + newString[newString.length - 1 - i]) + (i + 1);
  }

  return finalResult;


}


console.log(charConcat("CodeWars Rocks"));
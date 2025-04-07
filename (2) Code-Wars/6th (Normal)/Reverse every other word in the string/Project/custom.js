function reverse(str){

  let splited = str.split(" ");
  let result = "";
  for (let i = 0; i < splited.length; i++) {
    if (i % 2 !== 0) {
      result += splited[i].split("").reverse().join("");
      result += " ";
    } else {
      result += splited[i];
      result += " ";
    }
  }

  return result.trim();

}



console.log(reverse("I really don't like reversing strings!"));
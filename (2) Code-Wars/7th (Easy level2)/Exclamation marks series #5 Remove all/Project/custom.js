function remove(string) {

  let splited = string.split(" ");

  let result = "";
  for (let i = 0; i < splited.length; i++) {
    let word = splited[i].replace(/!+(?=\s|$)/g, '');
    result += word + " ";
  }

  return result.trim();

}

console.log(remove("!!!Hi !!hi!!! !hi"));
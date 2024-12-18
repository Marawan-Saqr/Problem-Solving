function remove(string) {

  let splited = string.split(" ");
  let result = [];

  let index = 0;
  while (index < splited.length) {
    while (splited[index].endsWith("!")) {
      splited[index] = splited[index].slice(0, -1);
    }
    result.push(splited[index]);
    index++;
  }

  return result.join(" ");

}

console.log(remove("!!!Hi !!hi!!! !hi"));
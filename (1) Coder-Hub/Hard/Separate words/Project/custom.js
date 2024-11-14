function cap_space(txt) {

  let result = "";

  for (let i = 0; i < txt.length; i++) {
    if (txt[i] === txt[i].toUpperCase()) {
      result += " ";
      result += txt[i].toLowerCase();
    } else {
      result += txt[i];
    }
  }

  return result;


}

console.log(cap_space("wePlayTennis"));
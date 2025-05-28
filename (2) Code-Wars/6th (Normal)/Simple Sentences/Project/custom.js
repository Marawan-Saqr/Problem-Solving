function makeSentence(parts) {

  let result = "";
  for (let i = 0; i < parts.length; i++) {
    if (parts[i] === "," && i !== parts.length - 1) {
      result += parts[i] + " ";
    } else if (parts[i + 1] === ",") {
      result += parts[i];
    } else if (parts[i].includes(".")) {
      result += ".";
    } else {
      result += parts[i] + " ";
    }
  }


  if (!result.includes(".")) {
    result += ".";
    return result.replace(/\s*\.+$/, ".").trim();
  } else {
    return result.replace(/\s*\.+$/, ".").trim();
  }

}


console.log(makeSentence(['hello', 'world']));
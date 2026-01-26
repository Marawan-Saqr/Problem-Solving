function canForm(source, target) {

  source = source.toLowerCase();
  target = target.toLowerCase();


  for (let i = 0; i < target.length; i++) {
    if (!source.includes(target[i])) {
      return "no";
    }
  }

  return "yes";

}

console.log(canForm("worldhello", "programming"));
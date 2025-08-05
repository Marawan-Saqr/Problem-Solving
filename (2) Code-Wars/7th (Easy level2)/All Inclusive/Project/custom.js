function containAllRots(string, arr) {

  for (let i = 0; i < string.length; i++) {
    let rotation = string.slice(i) + string.slice(0, i);
    if (!arr.includes(rotation)) {
      return false;
    }
  }

  return true;

}





console.log(containAllRots("bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]));
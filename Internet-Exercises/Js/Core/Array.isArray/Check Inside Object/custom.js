function getArrayKeys(object) {

  let result = [];
  for (let key in object) {
    if (Array.isArray(object[key])) {
      result.push(key);
    }
  }

  return result;

}



console.log(getArrayKeys({
  names: ["Ali", "Sara"],
  age: 30,
  tags: ["JS", "HTML"],
  address: "Cairo"
}));
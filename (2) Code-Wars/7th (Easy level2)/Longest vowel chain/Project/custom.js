function solve(s){

  let alphabetic = "aeiou";
  let resultLength = "";
  let store = "";

  for (let i = 0; i < s.length; i++) {
    if (alphabetic.includes(s[i])) {
      store += s[i];
      console.log(store);
    } else {
      if (resultLength.length < store.length) {
        resultLength = store;
      }
      store = "";
    }
  }

  if (resultLength.length < store.length) {
    resultLength = store;
  }

  return resultLength.length;

}



console.log(solve("suoidea"));
function sentence(arrayOfObjects) {

  let sorted = arrayOfObjects.sort((a, b) => {
    let keyA = parseInt(Object.keys(a));
    let keyB = parseInt(Object.keys(b));
    return keyA - keyB;
  });

  let result = [];
  for (let obj of sorted) {
    result.push(Object.values(obj));
  }

  return result.join(" ");

}


console.log(sentence([
  {'4': 'dog' }, {'2': 'took'}, {'3': 'his'},
  {'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'}
]));
function sentence(arrayOfObjects) {

  let result = [];

  const sortedItems = arrayOfObjects.sort((a, b) => {
    const keyA = parseInt(Object.keys(a)[0]);
    const keyB = parseInt(Object.keys(b)[0]);
    return keyA - keyB;
  });

  sortedItems.forEach(item => {
    const key = Object.keys(item)[0];
    result += item[key] + " ";
  });

  return result.split(" ").join(" ").trim();


}


console.log(sentence([

    {'4': 'dog' }, {'2': 'took'}, {'3': 'his'},
    {'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'}

  ]));
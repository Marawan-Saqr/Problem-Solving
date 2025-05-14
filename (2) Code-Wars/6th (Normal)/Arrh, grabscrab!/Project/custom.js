function grabscrab(anagram, dictionary) {

  if (dictionary.length === 0) {
    return [];
  }


  let result = [];
  let anagramSorted = anagram.split("").sort().join("");
  for (let i = 0; i < dictionary.length; i++) {
    let sorted = dictionary[i].split("").sort().join("");
    if (sorted === anagramSorted) {
      result.push(dictionary[i]);
    }
  }

  return result;

}




console.log(grabscrab("ortsp", ["sport", "parrot", "ports", "matey"]));
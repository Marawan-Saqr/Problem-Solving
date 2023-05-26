let words = ["banana", "Apple", "Orange", "Note", "car"];

let newWords = words.filter(function(element){
  return element.length > 5;
});


console.log(newWords);
const words = ['hello', 'world', 'javascript', 'map'];


let reversedString = words.map(function(element){
  return element.split("").reverse().join("");
});


console.log(reversedString);


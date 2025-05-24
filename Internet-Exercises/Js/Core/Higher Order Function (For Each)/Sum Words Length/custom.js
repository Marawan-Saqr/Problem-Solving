const words = ["apple", "banana", "kiwi"];


let result = 0;
words.forEach((element)=> {
  result += element.length;
})


console.log(result);
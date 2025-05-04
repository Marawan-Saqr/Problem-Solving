function thisWord(array) {

  let newArray = array.filter(function(element) {
    return element.includes("hello");
  })

  return newArray;

}


console.log(thisWord(["hello world", "javascript is fun", "hello again", "filter function"]));
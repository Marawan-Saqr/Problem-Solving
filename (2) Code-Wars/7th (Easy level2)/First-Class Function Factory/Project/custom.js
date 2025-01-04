function factory(x){

  return function second(array) {
    return array.map((element)=> {
      return element * x;
    })
  }

}



var myArray = [1, 2, 3];
console.log(fives(myArray));
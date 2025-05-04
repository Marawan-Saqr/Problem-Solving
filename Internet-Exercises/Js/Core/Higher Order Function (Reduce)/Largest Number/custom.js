let array = [12, 5, 8, 20, 3];

let largest = array.reduce(function(acc, current){
  if (current > acc) {
    return current;
  }
}, 1);


console.log(largest);
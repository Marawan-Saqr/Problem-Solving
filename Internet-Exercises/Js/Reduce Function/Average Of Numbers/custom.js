let array = [4, 8, 12, 6];

let average = array.reduce(function(acc, current){
  return (acc + current);
});


console.log(average / 4);
function friend(friends){

  let result = friends.filter(function(element) {
    return element.length === 4;
  })

  return result;

}


console.log(friend(["Ryan", "Kieran", "Mark"]));
function hashtag_it(my_array) {  

  let result = my_array.map(function(element) {
    return ` #${element}`;
  });

  return result.join("").trim();

}

console.log(hashtag_it(["stay_home", "coronavirus", "Saudi_Arabia"]));
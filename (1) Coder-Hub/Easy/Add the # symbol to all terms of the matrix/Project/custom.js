function hashtag_it(my_array) {

  let result = "";
  for (let i = 0; i < my_array.length; i++) {
    result += "#";
    result += my_array[i];
    result += " ";
  }

  return result.trim();

}



console.log(hashtag_it(["stay_home", "coronavirus", "Saudi_Arabia"]));
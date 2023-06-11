function hashtag_it(my_array) {
  let newArray = [];
  for (let i = 0; i < my_array.length; i++) {
    newArray.push(`#${my_array[i]}`);
  }
  newArray = newArray.join(" ");
  return newArray;
}



console.log(hashtag_it(['stay_home','coronavirus','Saudi_Arabia']));



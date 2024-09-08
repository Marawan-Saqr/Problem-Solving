function reverse(string){

  let splited = string.split(" ");

  let reversed = splited.reverse();

  return reversed.join(" ");

}

console.log(reverse("Hello World"));
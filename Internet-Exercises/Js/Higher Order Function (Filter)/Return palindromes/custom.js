let words = ["sys", "cnenc", "filter", "map", "js"];

let newNumbers = words.filter(function(e){
  let rev = e.split("").reverse("").join("");
  return e === rev;
});


console.log(newNumbers);


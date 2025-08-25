let div = document.querySelector("div");
let btn = document.getElementById("btn");


div.addEventListener("click", function() {
  alert("Div Clicked");
})


btn.addEventListener("click", function(e) {
  alert("Button Clicked");
  e.stopPropagation();
})
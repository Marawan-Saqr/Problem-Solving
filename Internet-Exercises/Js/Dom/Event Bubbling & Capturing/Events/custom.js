let outer = document.getElementById("outer");
let inner = document.getElementById("inner");
let btn = document.getElementById("btn");


outer.addEventListener("click", function() {
  console.log("Outer Clicked");
}, true);


inner.addEventListener("click", function() {
  console.log("Inner Clicked");
});


btn.addEventListener("click", function() {
  console.log("Clicked");
})
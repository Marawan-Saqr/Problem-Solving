let button = document.getElementById("myBtn");
let body = document.querySelector("body");

button.addEventListener("click", function() {
  body.classList.toggle("dark-mode");
})
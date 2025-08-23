let div = document.querySelector("div");

div.addEventListener("click", function(e) {
  console.log(e.clientX);
  console.log(e.clientY);
})
let btn = document.getElementById("btn");

btn.addEventListener("click", function(e) {
  console.log(e.type);
  console.log(e.target);
})
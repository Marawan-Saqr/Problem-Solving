const div = document.getElementById("div");

div.addEventListener("mouseover", function() {
  div.style.backgroundColor = "blue";
});

div.addEventListener("mouseout", function() {
  div.style.backgroundColor = "red";
})
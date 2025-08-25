let link = document.querySelector("a");

link.addEventListener("click", function(e) {
  e.preventDefault();
  alert("You stopped the default action!");
});
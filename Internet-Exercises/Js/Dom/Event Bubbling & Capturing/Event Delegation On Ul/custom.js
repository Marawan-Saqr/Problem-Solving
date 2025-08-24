let ul = document.getElementById("list");
let li = document.querySelectorAll("li");


ul.addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    console.log(e.target.textContent);
  }
});
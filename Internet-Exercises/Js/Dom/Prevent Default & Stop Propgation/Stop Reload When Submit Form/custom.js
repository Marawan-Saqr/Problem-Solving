let form = document.querySelector("form");
let inputText = document.getElementById("inputText");


form.addEventListener("submit", function(e) {
  e.preventDefault();
  console.log(inputText.value);
})
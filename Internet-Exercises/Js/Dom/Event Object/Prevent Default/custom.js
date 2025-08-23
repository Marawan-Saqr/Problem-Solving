let textInput = document.getElementById("textInput");
let submit = document.getElementById("submit");


submit.addEventListener("click", function(e) {
  e.preventDefault();
  console.log(textInput.value);
})
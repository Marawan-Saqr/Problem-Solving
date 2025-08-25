let form = document.querySelector("form");
let inputText = document.getElementById("inputText");
let inputPassword = document.getElementById("inputPassword");



form.addEventListener("submit", function(e) {
  if (inputText.value === "") {
    alert("inputText Are Required");
  } else if (inputPassword.value === "") {
    alert("inputPassword Are Required");
  } else {
    alert("Form submitted successfully!");
    inputText.value = "";
    inputPassword.value = "";
  }
  e.preventDefault();
})
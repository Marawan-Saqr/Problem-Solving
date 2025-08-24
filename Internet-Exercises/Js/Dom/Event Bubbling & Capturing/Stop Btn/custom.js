let stopBtn = document.getElementById("stopBtn");


document.addEventListener("click", function() {
  alert("Document Clicked");
})


stopBtn.addEventListener("click", function(e) {
  alert("Btn Clicked");
  e.stopPropagation();
})
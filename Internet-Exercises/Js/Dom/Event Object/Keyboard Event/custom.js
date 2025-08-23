document.addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    console.log("Yoh Have Clicked Enter");
  } else {
    console.log(e.key);
  }
})
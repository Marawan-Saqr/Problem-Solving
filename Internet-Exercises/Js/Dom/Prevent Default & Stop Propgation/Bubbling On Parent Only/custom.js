let grandParent = document.getElementById("grandparent");
let parent = document.getElementById("parent");
let child = document.getElementById("child");


grandParent.addEventListener("click", function(e) {
  alert("grandParent Clicked");
});


parent.addEventListener("click", function(e) {
  alert("parent Clicked");
});



child.addEventListener("click", function(e) {
  alert("Child Clicked");
  e.stopPropagation();
});
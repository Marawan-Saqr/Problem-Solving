// Get Elements
let buttons = document.querySelector(".buttons");


// Add Eventlistener To Parent Div
buttons.addEventListener("click", (e)=> {
  if (e.target.tagName === 'BUTTON') {
    alert("You Clicked On " + e.target.textContent);
  }
});
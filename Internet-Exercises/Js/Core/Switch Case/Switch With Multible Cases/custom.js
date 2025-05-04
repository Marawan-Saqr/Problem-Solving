let a = "Carrot";

switch(a) {
  case "Apple":
  case "Orange":
  case "Watermelon":
    console.log("Fruits");
    break;
  case "Tomatoes":
  case "Carrot":
  case "Pepper": 
    console.log("Vegetable");
    break;
  default:
    console.log("Error");
}
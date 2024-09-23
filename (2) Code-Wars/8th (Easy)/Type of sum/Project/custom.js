function typeOfSum(a, b) {

  if (typeof a === "number" && typeof b === "number") {
    return "number";
  } else if (typeof a === "string" && typeof b === "number") {
    return "string";
  } else if (typeof a === "number" && typeof b === "string") {
    return "string";
  } else if (typeof a === "string" && typeof b === "string") {
    return "string";
  } else if (typeof a === "boolean" && typeof b === "boolean") {
    return "number";
  } else if (typeof a === "string" && typeof b === "boolean") {
    return "string";
  } else if (typeof a === "boolean" && typeof b === "string") {
    return "string";
  } else if (a === null && typeof b === "number") {
    return "number";
  } else if (typeof a === "number" && b === null) {
    return "number";
  } else if (typeof a === "string" && b === null) {
    return "string";
  } else if (a === null && typeof b === "string") {
    return "string";
  } else if (a === null && typeof b === "undefined") {
    return "number";
  } else if (typeof a === "undefined" && b === null) {
    return "number";
  } else if (typeof a === "undefined" && typeof b === "string") {
    return "string";
  } else if (typeof a === "string" && typeof b === "undefined") {
    return "string";
  } else if (typeof a === "undefined" && typeof b === "boolean") {
    return "number";
  } else if (typeof a === "boolean" && typeof b === "undefined") {
    return "number";
  } else if (a === null && typeof b === "boolean") {
    return "number";
  } else if (typeof a === "boolean" && b === null) {
    return "number";
  } else {
    return "number";
  }

}

console.log(typeOfSum(null, true));
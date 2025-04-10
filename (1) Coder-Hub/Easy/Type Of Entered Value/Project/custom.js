function input_type(value) {

  if (value.includes(".")) {
    return isNaN(Number(value)) ? "string" : "double";
  } else if (Number(value)) {
    return "integer";
  } else {
    return "string";
  }

}

console.log(input_type("1.3"));
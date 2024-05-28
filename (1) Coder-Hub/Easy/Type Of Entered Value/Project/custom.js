function input_type(value) {

  if (value.includes(".")) {
    return "double";
  } else if (parseInt(value)) {
    return "integer";
  } else {
    return "string";
  }

}

console.log(input_type("hello"));
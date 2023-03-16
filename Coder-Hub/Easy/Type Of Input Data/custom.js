function input_type(value) {
  if (typeof value === 'string' && isNaN(value)) {
    return "string";
  } else if (!isNaN(value) && !Number.isInteger(Number(value)) && value.includes(".")) {
    return "double";
  } else if (!isNaN(value) && Number.isInteger(Number(value))) {
    return "integer";
  }
}



console.log(input_type("1"));





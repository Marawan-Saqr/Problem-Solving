function math_expr(expr) {

  let result = expr.replace(/\s+/g, '');

  if (isNaN(result[0]) && result[0].trim() !== '') {
    return false;
  } else if (isNaN(result[result.length - 1]) && result[result.length - 1].trim() !== '') {
    return false;
  } else if (result[1] !== "+" && result[1] !== "-" && result[1] !== "*" && result[1] !== "/") {
    return false;
  } else {
    return true;
  }

}

console.log(math_expr("1$1"));
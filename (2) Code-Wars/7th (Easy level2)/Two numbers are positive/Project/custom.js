function twoArePositive(a, b, c) {

  let newArray = [];
  newArray.push(a, b, c);

  let result = newArray.filter(function(e) {

    return e > 0;

  });

  if (result.length === 2) {
    return true;
  } else {
    return false;
  }

}

console.log(twoArePositive(2, 4, -3));

/////////////////////////////////////////////////////////////////////////////////////////////

// Another Solution


function twoArePositive(a, b, c) {

  if (a > 0 && b > 0 && c === 0) {
    return true;
  } else if (a === 0 && b > 0 && c > 0) {
    return true;
  } else if (a > 0 && b === 0 && c > 0) {
    return true;
  }else if (a > 0 && b > 0 && c > 0) {
    return false
  } else if (a > 0 && b > 0 && c < 0) {
    return true;
  } else if (a > 0 && c > 0 && b < 0) {
    return true;
  } else if (b > 0 && c > 0 && a < 0) {
    return true;
  } else if (b > 0 && a > 0 && c < 0) {
    return true;
  } else if (c > 0 && b > 0 && a < 0) {
    return true;
  } else if (c > 0 && a > 0 && b < 0) {
    return true;
  } else {
    return false;
  }

}
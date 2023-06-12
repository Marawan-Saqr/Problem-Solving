function stringContains(firstName, contains) {
  if (firstName.includes(contains)) {
    return true;
  } else {
    return false;
  }
}


console.log(stringContains("Ahmad", "A"));
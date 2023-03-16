function stringCheck(value) {
  for (let i = 1; i < value.length; i++) {
    if (value[i] !== value[0]) {
      return false;
    }
  }

  return true;
}



console.log(stringCheck(['Code', 'Code', 'Code'])); 


























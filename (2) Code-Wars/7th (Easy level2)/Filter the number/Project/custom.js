function filterString(value) {

  const numbersOnly = value.replace(/\D+/g, '');
  return parseInt(numbersOnly);

}


console.log(filterString("aa1bb2cc3dd"));
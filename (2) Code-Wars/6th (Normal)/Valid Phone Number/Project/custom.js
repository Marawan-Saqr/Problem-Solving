function validPhoneNumber(phoneNumber) {

  const regex = /^\(\d{3}\) \d{3}-\d{4}$/;
  return regex.test(phoneNumber);

}



console.log(validPhoneNumber("(123) 456-7890"));
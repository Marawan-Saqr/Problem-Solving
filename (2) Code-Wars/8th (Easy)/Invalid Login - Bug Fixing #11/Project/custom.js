function validate(username, password){
  var valid = new Validator();
  return valid.login(username, escape(password));
}

console.log(validate("Marawan", "12345"));

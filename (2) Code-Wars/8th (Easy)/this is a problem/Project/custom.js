function NameMe(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.name = this.firstName + ' ' + this.lastName;
}



let newName = new NameMe("Marawan", "Mahmoud");
newName.firstName;
newName.lastName;
newName.name;
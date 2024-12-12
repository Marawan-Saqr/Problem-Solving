function NameMe(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.name = this.firstName + " " + this.lastName;
}


var n = new NameMe('John', 'Doe');
n.firstName;
n.lastName;
n.name;
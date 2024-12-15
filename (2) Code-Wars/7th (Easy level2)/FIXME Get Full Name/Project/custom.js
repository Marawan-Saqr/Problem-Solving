class Dinglemouse{

  constructor( firstName, lastName ){
    this.f = firstName;
    this.l = lastName;
  }
  
  getFullName(){
    if (this.f === "") {
      return this.l;
    } else if (this.l === "") {
      return this.f;
    } else {
      return this.f + " " + this.l;
    }
  }

}
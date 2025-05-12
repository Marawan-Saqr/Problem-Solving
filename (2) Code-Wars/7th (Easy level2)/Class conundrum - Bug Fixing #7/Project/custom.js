class List {
  constructor(type) {
    this.type = type;
    this.items = [];
  }
  get count() {
    return this.items.length;
  }
  add(item){
    if(typeof item != this.type)
      return `This item is not of type: ${this.type}`;
    this.items.push(item);
    return this;
  }
}


// Operations
let newList = new List("string");
console.log(newList.add("Milk").add("hhh"));
console.log(newList.count);
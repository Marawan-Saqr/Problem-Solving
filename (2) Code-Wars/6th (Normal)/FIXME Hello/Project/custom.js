class Dinglemouse {
  constructor() {
    this.age = 0;
    this.sex = 0;
    this.name = 0;
    this.order = [];
  }


  setAge(age) {
    this.age = age;
    if (!this.order.includes("age")) {
      this.order.push("age");
    }
    return this;
  }


  setSex(sex) {
    this.sex = sex;
    if (!this.order.includes("sex")) {
      this.order.push("sex");
    }
    return this;
  }


  setName(name) {
    this.name = name;
    if (!this.order.includes("name")) {
      this.order.push("name");
    }
    return this;
  }


  hello() {
    let result = "Hello.";
    for (let key of this.order) {
      if (key === "name") {
        result += ` My name is ${this.name}.`;
      } else if (key === "age") {
        result += ` I am ${this.age}.`;
      } else if (key === "sex") {
        result += ` I am ${this.sex === 'M' ? 'male' : 'female'}.`;
      }
    }
    return result;
  }

}


// Operations
let newPerson = new Dinglemouse();
console.log(newPerson.setAge(28));
console.log(newPerson.setSex("M"));
console.log(newPerson.setName("Marawan"));
console.log(newPerson.hello());
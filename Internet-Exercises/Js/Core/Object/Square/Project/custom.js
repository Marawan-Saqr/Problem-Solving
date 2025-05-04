class MathHelper {

  // Static Methods
  static square(number) {
    return Math.pow(number, 2);
  }

  static cube(number) {
    return Math.pow(number, 3);
  }

}

// Testing the static methods
console.log(MathHelper.square(2));
console.log(MathHelper.cube(4));
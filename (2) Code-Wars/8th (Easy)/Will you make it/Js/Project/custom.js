const zeroFuel = (distanceToPump, mpg, fuelLeft) => {

  let expected = mpg * fuelLeft;
  if (expected >= distanceToPump) {
      return true;
    }
  else {
    return false;
  }

}

console.log(zeroFuel(50, 25, 2));
function circle_diameter(sides, side_length) {

  // Check if the inputs are valid
  if (sides < 3 || side_length <= 0) {
    return 0; // Invalid inputs
  }

  // Calculate the radius of the inscribed circle
  let radius = side_length / (2.0 * tan(3.14159 / sides));

  // Calculate the diameter of the circle
  let diameter = 2 * radius;

  return diameter;

}


console.log(circle_diameter(5, 3));
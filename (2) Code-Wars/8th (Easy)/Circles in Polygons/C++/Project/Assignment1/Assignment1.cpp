#include <iostream>
#include <cmath>
using namespace std;

double circle_diameter(unsigned int sides, unsigned int side_length);

int main() {

    cout << circle_diameter(4, 5) << endl;

    return 0;
}

double circle_diameter(unsigned int sides, unsigned int side_length) {
    // Check if the inputs are valid
    if (sides < 3 || side_length <= 0) {
        return 0; // Invalid inputs
    }

    // Calculate the radius of the inscribed circle
    double radius = side_length / (2.0 * tan(M_PI / sides));

    // Calculate the diameter of the circle
    double diameter = 2 * radius;

    return diameter;
}
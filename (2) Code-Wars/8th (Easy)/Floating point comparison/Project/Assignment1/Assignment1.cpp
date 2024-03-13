#include <iostream>
#include <cmath>
using namespace std;

bool approx_equals(double a, double b);

int main() {

    cout << approx_equals(175.9827, 82.25) << endl;

    return 0;
}

bool approx_equals(double a, double b) {
    return abs(a - b) <= 0.001;
}
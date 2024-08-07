#include <iostream>
#include <string>
using namespace std;

string integrate(const int& coefficient, const int& exponent);

int main() {

    cout << integrate(3, 2) << endl;

    return 0;
}

string integrate(const int& coefficient, const int& exponent) {
    int addExponent = exponent + 1;
    int integralFormula = coefficient / addExponent;
    return to_string(integralFormula) + "x" + "^" + to_string(addExponent);
}
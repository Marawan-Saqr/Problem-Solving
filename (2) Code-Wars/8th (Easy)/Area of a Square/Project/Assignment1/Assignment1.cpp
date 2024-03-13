#include <iostream>
using namespace std;

double square_area(double A);

int main() {

    cout << square_area(2) << endl;

    return 0;
}

double square_area(double A) {
    return round(pow(2 * A / M_PI, 2) * 100) / 100;
};
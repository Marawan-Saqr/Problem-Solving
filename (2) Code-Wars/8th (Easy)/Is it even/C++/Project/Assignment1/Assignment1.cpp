#include <iostream>
#include <cmath>
using namespace std;

bool is_even(double n);

int main() {

    cout << is_even(0.5) << endl;

    return 0;
}


bool is_even(double n) {
    return fmod(n, 2) == 0;
}

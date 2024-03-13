#include <iostream>
#include <cmath>
using namespace std;

int mySqrt(int x);

int main() {
    
    cout << mySqrt(4) << endl;
    return 0;
}

int mySqrt(int x) {
    return sqrt(x);
}
#include <iostream>
#include <string>
using namespace std;

bool checkForFactor(int base, int factor);

int main() {

    
    cout << checkForFactor(10, 2) << endl;


    return 0;
}

bool checkForFactor(int base, int factor) {
    if (base % factor == 0) {
        return 1;
    }
    else {
        return 0;
    }
}
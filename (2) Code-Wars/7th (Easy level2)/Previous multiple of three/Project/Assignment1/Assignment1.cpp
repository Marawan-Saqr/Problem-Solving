#include <iostream>
#include <string>
using namespace std;

int prev_mult_of_three(int n);

int main() {
    
    cout << prev_mult_of_three(1) << endl;

    return 0;
}

int prev_mult_of_three(int n) {

    if (n % 3 == 0) {
        return n;
    }

    string convertN = to_string(n);
    int lengthOfConvertN = convertN.length();

    for (int i = lengthOfConvertN - 1; i > 0; i--) {
        n /= 10;
        if (n % 3 == 0) {
            return n;
        }
    }


    return -1;
}


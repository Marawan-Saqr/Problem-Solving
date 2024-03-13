#include <iostream>
using namespace std;

int summation(int num);

int main() {

    cout << summation(8) << endl;

    return 0;
}

int summation(int num) {
    int result = 0;
    for (int i = 1; i <= num; i++) {
        result += i;
    }
    return result;
}
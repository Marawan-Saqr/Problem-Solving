#include <iostream>
using namespace std;

double SakuraFall(double speed);

int main() {

    cout << SakuraFall(5) << endl;

    return 0;
}

double SakuraFall(double speed) {
    if (speed <= 0) {
        return 0;
    }
    else {
        return (5 * 80) / speed;
    }
}
#include <iostream>
using namespace std;

int twice_as_old(int dad, int son);

int main() {

    cout << twice_as_old(36, 7) << endl;

    return 0;
}


int twice_as_old(int dad, int son) {
    int result = 0;
    result = dad - (son * 2);
    if (result < 0) {
        return -result;
    }
    else {
        return result;
    }
}
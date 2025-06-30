#include <iostream>
using namespace std;

bool is_cube(int volume, int side)
{
    if (volume <= 0 || side <= 0) {
        return false;
    }
    else {
        if (volume == side * side * side) {
            return true;
        }
        else {
            return false;
        }
    }
}

int main() {


    cout << is_cube(2, 1) << endl;


    return 0;
}





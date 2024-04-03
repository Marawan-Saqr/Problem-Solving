#include <iostream>
using namespace std;

int area_or_perimeter(int l, int w);

int main() {

    cout << area_or_perimeter(4, 4) << endl;

    return 0;
}

int area_or_perimeter(int l, int w) {
    if (l == w) {
        return l * w;
    }
    else {
        return (l + w) * 2;
    }
}

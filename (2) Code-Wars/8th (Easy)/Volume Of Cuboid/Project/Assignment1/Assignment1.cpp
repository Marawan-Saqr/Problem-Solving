#include <iostream>
using namespace std;

double getVolumeOfCuboid(double length, double width, double height);

int main() {

    cout << getVolumeOfCuboid(5, 6, 1) << endl;

    return 0;
}

double getVolumeOfCuboid(double length, double width, double height) {
    return length * width * height;
}
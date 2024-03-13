#include <iostream>
#include <cmath>
using namespace std;

double EasyLogs(double x, double a, double b);

int main() {

    cout << EasyLogs(10, 2, 3) << endl;

    return 0;
}

double EasyLogs(double x, double a, double b) {
    return log(a * b) / log(x);
}
#include <iostream>
using namespace std;

int duty_free(int price, int discount, int holiday_cost);

int main() {

    cout << duty_free(12, 50, 1000) << endl;

    return 0;
}

int duty_free(int price, int discount, int holiday_cost) {
    double saving_per_bottle = price * (static_cast<double>(discount) / 100.0);
    int bottles_needed = holiday_cost / saving_per_bottle;
    return bottles_needed;
}
#include <iostream>
using namespace std;

int rental_car_cost(int d);

int main() {
    
    cout << rental_car_cost(4) << endl;

    return 0;
}

int rental_car_cost(int d) {
    int cost = d * 40;
    if (d < 3) {
       return cost;
    }
    else if (d >= 7) {
        return cost - 50;
    }
    else if (d >= 3) {
        return cost - 20;
    }
}
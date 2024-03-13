#include <iostream>
using namespace std;

int combat(int health, int damage);

int main() {

    cout << combat(20, 30) << endl;

    return 0;
}

int combat(int health, int damage) {
    int result = 0;
    result = health - damage;
    if (result < 0) {
        return 0;
    }
    else {
        return result;
    }
}
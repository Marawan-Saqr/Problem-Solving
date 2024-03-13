#include <iostream>
using namespace std;

int mango(int quantity, int price);

int main() {

	cout << mango(2, 3) << endl;
	return 0;
}

int mango(int quantity, int price) {
	return (quantity - quantity / 3) * price;
}
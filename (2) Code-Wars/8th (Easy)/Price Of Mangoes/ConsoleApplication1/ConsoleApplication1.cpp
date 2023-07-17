#include <iostream>
using namespace std;

int mango(int quantity, int price)
{
	return (quantity - quantity / 3) * price;
}


int main() {

	
	cout << mango(3, 3) << endl;
	
	return 0;
}
#include <iostream>
using namespace std;

bool isDivisible(int n, int x, int y) {
	if (n % x == 0 && n % y == 0) {
		return true;
	}
	else {
		return false;
	}
}

int main() {

	
	cout << isDivisible(3, 3, 4) << endl;
	return 0;
}
#include <iostream>
using namespace std;

bool lovefunc(int f1, int f2);

int main() {

	cout << lovefunc(2, 3) << endl;

	return 0;
}

bool lovefunc(int f1, int f2) {
	if (f1 % 2 == 0 && f2 % 2 != 0) {
		return true;
	}
	else if (f1 % 2 != 0 && f2 % 2 == 0) {
		return true;
	}
	else if (f1 % 2 == 0 && f2 % 2 == 0) {
		return false;
	}
	else if (f1 % 2 != 0 && f2 % 2 != 0) {
		return false;
	}
	else if (f1 == 0 && f2 == 0) {
		return false;
	}
}
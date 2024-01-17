#include <iostream>
using namespace std;

int makeNegative(int num);

int main() {

	cout << makeNegative(-5) << endl;

	return 0;
}

int makeNegative(int num) {
	if (num > 0) {
		return -num;
	}
	else if (num < 0) {
		return num;
	}
	else {
		return 0;
	}
}
#include <iostream>
using namespace std;

int simpleMultiplication(int number) {
	if (number % 2 == 0) {
		return number * 8;
	}
	else {
		return number * 9;
	}
}

int main() {


	cout << simpleMultiplication(2) << endl;

	
	return 0;
}
#include <iostream>
using namespace std;

int nthEven(int n);

int main() {

	cout << nthEven(3) << endl;
	
	return 0;
}

int nthEven(int n) {
	int result = 0;
	for (int i = 1; i < n; i++) {
		result += 2;
	}
	return result;
}
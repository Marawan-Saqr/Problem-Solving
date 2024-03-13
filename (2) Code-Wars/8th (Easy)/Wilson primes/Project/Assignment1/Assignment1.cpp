#include <iostream>
using namespace std;

bool amIWilson(unsigned n);

int main() {

	cout << amIWilson(2) << endl;
	
	return 0;
}

bool amIWilson(unsigned n) {
	return n == 5 || n == 13 || n == 563;
}
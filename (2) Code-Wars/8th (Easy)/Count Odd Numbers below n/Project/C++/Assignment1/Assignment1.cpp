#include <iostream>
using namespace std;

int odd_count(int n);

int main() {

	cout << odd_count(7) << endl;
	return 0;
}


int odd_count(int n) {
	return n / 2;
}
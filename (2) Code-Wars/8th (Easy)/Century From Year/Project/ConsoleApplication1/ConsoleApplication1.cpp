#include <iostream>
using namespace std;

float century(float year) {
	
	return ceil(year / 100);
}

int main() {

	
	cout << century(1705) << endl;
	return 0;
}
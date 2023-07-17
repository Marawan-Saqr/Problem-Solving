#include <iostream>
using namespace std;


int quarter_of(int month) {
	if (month >= 1 && month < 4) {
		return 1;
	}
	else if (month >= 4 && month < 7) {
		return 2;
	}
	else if (month >= 7 && month < 10) {
		return 3;
	}
	else if (month >= 10 && month <= 12) {
		return 4;
	}
}

int main() {


	
	cout << quarter_of(12) << endl;
	
	return 0;
}
#include <iostream>
using namespace std;

int opposite(int number);

int main() {

	cout << opposite(5) << endl;
	
	return 0;
}


int opposite(int number) {
	if (number == -number) {
		return number;
	}
	else {
		return -number;
	}
}
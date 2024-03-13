#include <iostream>
#include <string>
using namespace std;

bool hero(int bullets, int dragons);

int main() {

	cout << hero(5, 2) << endl;
	
	return 0;
}

bool hero(int bullets, int dragons) {
	if (bullets / 2 > dragons) {
		return true;
	}
	else {
		return false;
	}
}
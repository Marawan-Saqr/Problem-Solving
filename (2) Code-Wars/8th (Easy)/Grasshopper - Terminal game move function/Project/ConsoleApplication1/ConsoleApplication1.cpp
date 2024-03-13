#include <iostream>
using namespace std;

int move(int position, int roll);

int main() {
    
	cout << move(0, 4) << endl;

	return 0;
}

int move(int position, int roll) {
	return roll * 2 + position;
}
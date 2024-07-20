#include <iostream>
using namespace std;

char get_char(int i);

int main() {

	cout << get_char(56) << endl;
	
	return 0;
}

char get_char(int i) {
	return char(i);
}

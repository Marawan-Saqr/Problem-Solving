#include <iostream>
#include <string>
using namespace std;

string bool_to_word(bool value);

int main() {

	cout << bool_to_word(true) << endl;
	return 0;
}

string bool_to_word(bool value) {
	
	if (value) {
		return "Yes";
	}
	else {
		return "No";
	}
}
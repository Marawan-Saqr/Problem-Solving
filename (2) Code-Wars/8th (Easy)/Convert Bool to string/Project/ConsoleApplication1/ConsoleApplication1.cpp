#include <iostream>
#include <string>
using namespace std;

string boolean_to_string(bool b);

int main() {

	cout << boolean_to_string(true) << endl;
	return 0;
}

string boolean_to_string(bool b) {
	if (b == true) {
		return "true";
	}
	else {
		return "false";
	}
}
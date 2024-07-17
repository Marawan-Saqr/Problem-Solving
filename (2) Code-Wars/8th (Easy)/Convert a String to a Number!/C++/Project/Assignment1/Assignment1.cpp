#include <iostream>
#include <string>
using namespace std;

int string_to_number(const std::string& s);

int main() {

	cout << string_to_number("1234") << endl;

	return 0;
}

int string_to_number(const std::string& s) {
	int result = 0;
	for (int i = 0; i < s.length(); i++) {
		result = stoi(s);
	}
	return result;
}
#include <iostream>
#include <string>
using namespace std;

bool is_uppercase(const std::string& s);

int main() {

	cout << is_uppercase("ACSKLDFJSGSKLDFJSKLDFJ") << endl;

	return 0;
}

bool is_uppercase(const std::string& s) {
	for (int i = 0; i < s.length(); i++) {
		if (islower(s[i])) {
			return false;
		}
	}
	return true;
}
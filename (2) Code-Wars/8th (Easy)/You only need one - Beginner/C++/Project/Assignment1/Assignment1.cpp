#include <iostream>
#include <vector>
#include <string>
using namespace std;

bool check(const std::vector<std::string>& seq, const std::string& elem);

int main() {

	string searchElement = "a";
	vector<string> arrayNumbers = {"a", "b", "c"};
	cout << check(arrayNumbers, searchElement) << endl;
	
	return 0;
}

bool check(const std::vector<std::string>& seq, const std::string& elem) {
	bool result;
	for (int i = 0; i < seq.size(); i++) {
		if (seq[i] == elem) {
			result = true;
			break;
		}
		else {
			result = false;
		}
	}
	return result;
}
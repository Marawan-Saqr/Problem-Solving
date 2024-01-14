#include <iostream>
using namespace std;

std::string repeat_str(size_t repeat, const std::string& str);

int main() {

	cout << repeat_str(6, "Hello") << endl;
	
	return 0;
}

std::string repeat_str(size_t repeat, const std::string& str) {
	std::string result = "";
	for (int i = 1; i <= repeat; i++) {
		result += str;
	}
	return result;
}
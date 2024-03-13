#include <iostream>
using namespace std;

std::string makeUpperCase(const std::string& input_str);

int main() {

	cout << makeUpperCase("hello") << endl;
	
	return 0;
}

std::string makeUpperCase(const std::string& input_str){
	string result = "";
	for (int i = 0; i < input_str.length(); i++) {
		result += toupper(input_str[i]);
	}
	return result;
}
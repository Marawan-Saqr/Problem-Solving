#include <iostream>
#include <string>
using namespace std;

int get_age(const std::string& she_said);

int main() {

	cout << get_age("years old") << endl;
	
	return 0;
}

int get_age(const std::string& she_said) {
	return stoi(she_said);
}
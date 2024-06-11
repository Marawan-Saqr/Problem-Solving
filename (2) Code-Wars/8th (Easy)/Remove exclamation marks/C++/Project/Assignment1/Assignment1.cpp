#include <iostream>
#include <string>
using namespace std;

string removeExclamationMarks(string str) {
	int strLength = size(str);
	string result = "";
	for (int i = 0; i < strLength; i++) {
		if (str[i] == '!') {
			continue;
		}
		else {
			result += str[i];
		}
	}
	return result;
}


int main() {

	cout << removeExclamationMarks("Hello World!!!");


	return 0;
}
#include <iostream>
#include <string>
using namespace std;

string reverseString(string str);

int main() {

	cout << reverseString("Hello") << endl;
	return 0;
}

string reverseString(string str) {

	string result = "";

	for (int i = str.length() - 1; i >= 0; i--) {
		result += str[i];
	}
	return result;
}
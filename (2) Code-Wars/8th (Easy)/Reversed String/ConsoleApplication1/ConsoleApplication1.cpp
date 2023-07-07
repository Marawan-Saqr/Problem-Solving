#include <iostream>
#include <string>
using namespace std;

string reverseString(string str) {
	string reverseWord = "";
	for (int i = str.length() - 1; i >= 0; i--) {

		reverseWord += str[i];
	}

	return reverseWord;
}


int main() {

	cout << reverseString("Hello") << endl;

	return 0;
}
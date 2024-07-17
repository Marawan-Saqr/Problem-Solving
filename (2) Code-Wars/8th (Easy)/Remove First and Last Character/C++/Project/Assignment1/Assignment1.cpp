#include <iostream>
#include <string>
using namespace std;

string sliceString(string str);


int main() {

	
	cout << sliceString("translation") << endl;
	return 0;
}


string sliceString(string str) {
	string result = "";
	int strLength = size(str);
	for (int i = 0; i < strLength - 1; i++) {
		if (i == 0 || i == strLength) {
			continue;
		}
		else {
			result += str[i];
		}
	}
	return result;
}
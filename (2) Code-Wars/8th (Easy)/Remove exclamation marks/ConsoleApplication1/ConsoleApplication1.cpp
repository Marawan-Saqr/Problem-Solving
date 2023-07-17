#include <iostream> 
#include <string>
using namespace std;



string removeExclamationMarks(string str) {
	string clean = "";
	for (int i = 0; i < str.length(); i++ ) {
		if (str[i] == '!') {
			continue;
		}
		clean += str[i];
	}
	return clean;
}

int main() {

	cout << removeExclamationMarks("Hello World!") << endl;
	
	return 0;
}
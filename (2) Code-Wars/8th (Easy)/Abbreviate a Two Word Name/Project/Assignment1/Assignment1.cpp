#include <iostream>
using namespace std;

std::string abbrevName(std::string name);

int main() {

	cout << abbrevName("MMehad Cejfd") << endl;
	
	return 0;
}

string abbrevName(string name){
	string result = "";
	int nameLength = size(name);
	for (int i = 0; i < nameLength; i++) {
		if (i == 0) {
			result += toupper(name[0]);
			result += '.';
		}
		else if (name[i] == ' ') {
			result += toupper(name[i + 1]);
		}
	}
	return result;
}
#include <iostream>
using namespace std;

unsigned int strCount(const std::string& word, char letter);

int main() {

	cout << strCount("Hello", 'e') << endl;
	
	return 0;
}

unsigned int strCount(const std::string& word, char letter) {
	int counter = 0;
	int wordLength = size(word);
	for (int i = 0; i < wordLength; i++) {
		if (word == "") {
			counter = 0;
		}
		else if (word[i] == letter) {
			counter++;
		}
	}
	return counter;
}
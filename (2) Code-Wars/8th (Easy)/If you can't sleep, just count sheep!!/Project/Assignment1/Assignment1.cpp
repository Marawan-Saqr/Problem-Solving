#include <iostream>
#include <string>
using namespace std;

string countSheep(int number);

int main() {

	cout << countSheep(5) << endl;

	return 0;
}


string countSheep(int number) {
	string result = "";
	for (int i = 1; i <= number; i++) {
		result += to_string(i) + " sheep...";
	}
	return result;
}
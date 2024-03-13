#include <iostream>
#include <string>
using namespace std;

string number_to_string(int num);

int main() {

	cout << number_to_string(5) << endl;
	
	return 0;
}


string number_to_string(int num) {
	return to_string(num);
}
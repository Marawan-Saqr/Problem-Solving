#include <iostream>
#include <string>
using namespace std;

string even_or_odd(int number);

int main() {

	cout << even_or_odd(5) << endl;
	return 0;
}

string even_or_odd(int number) {

	if (number % 2 == 0) {
		return "even";
	}
	else {
		return "odd";
	}
}
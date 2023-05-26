#include<iostream>
using namespace std;
int main() {

	int num1;
	int num2;
	cout << "Enter First Number " << endl;
	cin >> num1;
	cout << "You Entered " << num1 << endl;
	cout << "Enter Second Number " << endl;
	cin >> num2;
	cout << "You Entered " << num2 << endl;

	if (num1 > num2) {
		cout << "The Greatest number of " << num1 << " and " << num2 << " is " << num1 << endl;
	}
	else if (num2 > num1) {
		cout << "The Greatest number of " << num1 << " and " << num2 << " is " << num2 << endl;
	}
	else if (num1 == num2) {
		cout << "The Greatest number of " << num1 << " and " << num2 << " is " << "Draw" << endl;
	}
	else {
		cout << "Error" << endl;
	}








	return 0;
}
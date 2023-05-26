#include<iostream>
using namespace std;
int main() {

	int width;
	int height;
	cout << "Enter The Width Of Rectangle " << endl;
	cin >> width;
	cout << "Enter The Height Of Rectangle " << endl;
	cin >> height;

	if (width == height) {
		cout << "This Is Square " << endl;
	}
	else {
		cout << "No It Isn't Square" << endl;
	}




	return 0;
}
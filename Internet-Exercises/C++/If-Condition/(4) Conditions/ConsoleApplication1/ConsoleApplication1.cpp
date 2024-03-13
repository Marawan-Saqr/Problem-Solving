#include<iostream>
using namespace std;

void tempratureFunction(bool isSnowing, bool isRaining, double temprature);

int main() {

	tempratureFunction(true, true, 30);

	return 0;
}

void tempratureFunction(bool isSnowing, bool isRaining, double temprature) {
	if (isSnowing == true || isRaining == true || temprature < 50) {
		cout << "Let Us Stay Home" << endl;
	}
	else {
		cout << "Let us go out" << endl;
	}
}
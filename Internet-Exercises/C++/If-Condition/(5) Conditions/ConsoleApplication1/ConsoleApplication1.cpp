#include<iostream>
using namespace std;

string timeOfDay(double time);

int main() {

	double timeOfDayOfUser;
	cout << "Please Enter Time Of Day" << endl;
	cin >> timeOfDayOfUser;
	cout << timeOfDay(timeOfDayOfUser) << endl;

	return 0;
}


string timeOfDay(double time) {
	string timeDay;
	if (time >= 5 && time < 12) {
		return timeDay = "Morning";
	}
	else if (time >= 12 && time < 20) {
		return timeDay = "daytime";
	}
	else {
		return timeDay = "Night";
	}
}
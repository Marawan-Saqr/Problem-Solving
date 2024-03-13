#include <iostream>
#include <string>
using namespace std;

string bonus_time(int salary, bool bonus);

int main() {

	cout << bonus_time(10000, true) << endl;
	
	return 0;
}

string bonus_time(int salary, bool bonus) {
	int result = 0;
	if (bonus == true) {
		result = salary * 10;
		return "$" + to_string(result) + "$";
	}
	else {
		return "$" + to_string(salary);
	}
}

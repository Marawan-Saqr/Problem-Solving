#include <iostream>
#include <vector>
#include <string>
using namespace std;

bool set_alarm(const bool& employed, const bool& vacation);

int main() {

	cout << set_alarm(true, false) << endl;

	return 0;
}


bool set_alarm(const bool& employed, const bool& vacation) {
	if (employed == true && vacation == true) {
		return false;
	}
	else if (employed == true && vacation == false) {
		return true;
	}
	else if (employed == false && vacation == true) {
		return false;
	}
	else if (employed == false && vacation == false) {
		return false;
	}
}
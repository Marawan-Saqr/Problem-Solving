#include <iostream>
using namespace std;

bool zero_fuel(uint32_t distance_to_pump, uint32_t mpg, uint32_t fuel_left);

int main() {

	cout << zero_fuel(100, 50, 1) << endl;
	
	return 0;
}

bool zero_fuel(uint32_t distance_to_pump, uint32_t mpg, uint32_t fuel_left) {
	if (mpg * fuel_left >= distance_to_pump) {
		return true;
	}
	else {
		return false;
	}
}
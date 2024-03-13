#include <iostream>
#include <cmath>
#include <vector>
#include <string>
using namespace std;

string bmi(double w, double h);

int main() {

	
	cout << bmi(75.67093133653535, 1.5855697711217844) << endl;
	return 0;
}

string bmi(double w, double h) {
	
	int result = w / pow(h, 2);

	if (result <= 18.5) {
		return "Underweight";
	}

	else if (result <= 25.0) {
		return "Normal";
	}

	else if (result <= 30.0) {
		return "Overweight";
	}

	else if (result > 30) {
		return "Obese";
	}
}
#include <iostream>
#include <vector>
using namespace std;

double calcAverage(const std::vector<int>& values);

int main() {

	vector<int> numbersArray = { 2, 5 };
	cout << calcAverage(numbersArray) << endl;
	return 0;
}

double calcAverage(const std::vector<int>& values) {
	double result = 0;
	double average = 0;
	for (int i = 0; i < values.size(); i++) {
		result += values[i];
	}
	average = result / values.size();
	return average;
}
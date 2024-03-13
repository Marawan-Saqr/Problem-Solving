#include <iostream>
#include <vector>
using namespace std;

double calcAverage(const vector<int>& values);

int main() {

	vector<int> values = {3, 2, 5, 1};
	double result = calcAverage(values);
	cout << result << endl;
	return 0;
}

double calcAverage(const vector<int>& values) {
	
	double result = 0;

	for (int i = 0; i < values.size(); i++) {
		result += values[i];
	}

	return result / values.size();
}
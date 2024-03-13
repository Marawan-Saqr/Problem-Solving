#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int sumOfDifferences(const vector<int>& arr);

int main() {

	vector<int> numbers = { 1, 2, 10 };
	cout << sumOfDifferences(numbers) << endl;

	return 0;
}

int sumOfDifferences(const vector<int>& arr) {
	int result = 0;
	sort(arr.rbegin(), arr.rend());
	if (arr.size() <= 1) {
		return 0;
	}
	else {
		for (int i = 0; i < arr.size() - 1; i++) {
			result += arr[i] - arr[i + 1];
		}
	}
	return result;
}

#include <iostream>
#include <vector>
using namespace std;

int grow(vector<int> nums);

int main() {

	vector<int> arrayOfNumbers = { 1, 2, 3, 4 };
	cout << grow(arrayOfNumbers) << endl;

	return 0;
}

int grow(vector<int> nums) {
	int result = 1;
	for (int i = 0; i < nums.size(); i++) {
		result *= nums[i];
	}
	return result;
}
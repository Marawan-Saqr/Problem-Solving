#include <iostream>
#include <vector>
using namespace std;

int square_sum(const std::vector<int>& numbers);

int main() {

	vector<int> nums = { 1, 2, 2 };

	cout << square_sum(nums) << endl;

	return 0;
}


int square_sum(const std::vector<int>& numbers){
	int result = 0;
	for (int i = 0; i < numbers.size(); i++) {
		result += pow(numbers[i], 2);
	}
	return result;
}
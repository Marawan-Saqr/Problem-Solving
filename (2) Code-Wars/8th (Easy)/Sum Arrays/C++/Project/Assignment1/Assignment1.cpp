#include <iostream>
#include <vector>
using namespace std;

int sum(vector<int> nums);

int main() {

    vector<int> numbers = { 1, 2, 3, 4 };
    int result = sum(numbers);
    cout << "Sum: " << result << endl;
    return 0;

    return 0;
}

int sum(vector<int> nums) {
    int result = 0;
    for (int i = 0; i < nums.size(); i++) {
        result += nums[i];
    }
    return result;
}
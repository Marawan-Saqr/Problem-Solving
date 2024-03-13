#include <iostream>
#include <vector>
#include<algorithm>
using namespace std;

int singleNumber(vector<int>& nums);

int main() {
    
    vector<int> numbers = { 4, 1, 2, 1, 2 };
    int result = singleNumber(numbers);
    cout << result << endl;

    return 0;
}

int singleNumber(vector<int>& nums) {

    sort(nums.begin(), nums.end());   // {1, 1, 2, 2, 4}

    for (int i = 1; i < nums.size(); i += 2) {
        if (nums[i] != nums[i - 1]) {
            return nums[i - 1];
        }
    }

    // If no single number is found, the single number is the last element
    return nums[nums.size() - 1];
}

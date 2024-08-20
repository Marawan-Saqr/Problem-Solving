#include <iostream>
#include <vector>
using namespace std;

vector<int> runningSum(vector<int>& nums);

int main() {
    
    vector<int> numbers = {1, 2, 3, 4};
    vector<int> result = runningSum(numbers);

    for (int num : result) {
        cout << num << endl;
    }

    return 0;
}

vector<int> runningSum(vector<int>& nums) {

    vector<int> newNumbers;
    int result = nums[0];
    newNumbers.push_back(result);
    for (int i = 0; i < nums.size() - 1; i++) {
        result = result + nums[i + 1];   
        newNumbers.push_back(result);
    }
    return newNumbers;
}

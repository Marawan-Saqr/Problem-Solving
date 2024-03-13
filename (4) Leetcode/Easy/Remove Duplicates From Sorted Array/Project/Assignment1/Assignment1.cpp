#include <iostream>
#include <vector>
using namespace std;

int removeDuplicates(vector<int>& nums);

int main() {
  
    vector<int> numbers = {1, 1, 2, 3};
    int result = removeDuplicates(numbers);
    cout << result << endl;

    return 0;
}

int removeDuplicates(vector<int>& nums) {
    if (nums.empty()) {
        return 0;
    }

    int k = 1;
    for (int i = 1; i < nums.size(); i++) {
        if (nums[i] != nums[i - 1]) {
            nums[k] = nums[i];                
            k++;
        }
    }
    return k;
}
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int removeElement(vector<int>& nums, int val);

int main() {
    
    vector<int> numbers = { 0, 1, 2, 2, 3, 0, 4, 2 };
    int value = 2;

    int result = removeElement(numbers, value);
    cout << result << endl;

    return 0;
}

int removeElement(vector<int>& nums, int val) {

    sort(nums.begin(), nums.end());  // 0, 0 , 1, 2, 2, 2, 3, 4

    int k = 0;

    for (int i = 0; i < nums.size(); i++) {
        if (val != nums[i]) {
            nums[k] = nums[i];
            k++;
        }
    }

    cout << "The Final Result Is" << endl;
    return k;
}